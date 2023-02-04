import './fetch_tracing_annotation.css';
import { StatusMessage } from 'neuroglancer/status';
import { RefCounted } from 'neuroglancer/util/disposable';
import { removeFromParent } from 'neuroglancer/util/dom';
import { fetchOk } from 'neuroglancer/util/http_request';
import { makeIcon } from 'neuroglancer/widget/icon';
import { AppSettings } from 'neuroglancer/services/service';
import {makeLayer} from 'neuroglancer/layer';
// import {UserLayerWithAnnotations} from 'neuroglancer/ui/annotations';
import {SegmentationUserLayer} from 'neuroglancer/segmentation_user_layer';
// import {Uint64} from 'neuroglancer/util/uint64';

interface TracingJSON {
  brain_names: Array<string>
  frac_injections: Array<number>
  primary_inj_sites: Array<string>
  brain_urls: Array<string>
}

export class FetchTracingAnnotationWidget extends RefCounted {
  public element: HTMLElement;
  private virusTimepoint: HTMLSelectElement;
  private primaryInjectionSite: HTMLSelectElement;

  // private addAnnotationButton: HTMLElement;
  public lastFetchField: HTMLElement;
  private fetchButton: HTMLElement;
  // private numberNeuronsShownField: HTMLElement

  constructor(public layer: SegmentationUserLayer) {
    super();
    const virusTimepointOptions = ["HSV-H129_Disynaptic","HSV-H129_Trisynaptic","PRV_Disynaptic"];
    const primaryInjectionSiteOptions = ["Lob. I-V","Lob. VI, VII","Lob. VIII-X","Simplex","Crus I","Crus II","PM, CP","All sites"];

    const buttonText = 'Click to fetch';
    const buttonTitle = 'Fetch tracing brains';

    // Make the overall div for this tool
    this.element = document.createElement('div');
    this.element.classList.add('neuroglancer-fetch-tracing-tool');

    // Title for the tool
    const fetchTitle = document.createElement('h3');
    fetchTitle.innerText = "Load Viral Tracing annotations"
    fetchTitle.classList.add('neuroglancer-tracing-tool-title')

    ///////// FILTER #1 /////////
    // Make the div for this fitler (i.e. set of fields)
    const filterField = document.createElement('div');
    
    // Virus timepoint -- e.g. "HSV-H129_Disynaptic" ,
    this.virusTimepoint = document.createElement('select');
    this.virusTimepoint.id = "tracing-filter-type-1";
    this.virusTimepoint.classList.add('neuroglancer-fetch-tracing-selection');
   
    const defaultOptionVirusTimepoint = document.createElement('option');
    defaultOptionVirusTimepoint.text = 'Select Virus and Timepoint';
    defaultOptionVirusTimepoint.value = '';
    defaultOptionVirusTimepoint.disabled = true;
    defaultOptionVirusTimepoint.selected = true;
    this.virusTimepoint.add(defaultOptionVirusTimepoint);

    virusTimepointOptions.forEach((option:string) => {
        const filter_option = document.createElement('option');
        filter_option.value = option;
        filter_option.text = option;
        this.virusTimepoint.add(filter_option);
      });

    // Primary injection site
    this.primaryInjectionSite = document.createElement('select');
    this.primaryInjectionSite.classList.add('neuroglancer-fetch-tracing-selection');

    const defaultOptionPrimaryInjectionSite = document.createElement('option');
    defaultOptionPrimaryInjectionSite.text = 'Select Primary Injection Site';
    defaultOptionPrimaryInjectionSite.value = '';
    defaultOptionPrimaryInjectionSite.disabled = true;
    defaultOptionPrimaryInjectionSite.selected = true;
    this.primaryInjectionSite.add(defaultOptionPrimaryInjectionSite);

    primaryInjectionSiteOptions.forEach((option:string) => {
        const filter_option = document.createElement('option');
        filter_option.value = option;
        filter_option.text = option;
        this.primaryInjectionSite.add(filter_option);
      });
  
    // Add child elements to parent filter element
    filterField.appendChild(fetchTitle);
    filterField.appendChild(this.virusTimepoint);
    filterField.appendChild(this.primaryInjectionSite);

    // SUBMIT QUERY BUTTON
    this.fetchButton = makeIcon({
      text: buttonText,
      title: buttonTitle,
      onClick: () => {this.fetchTracingBrains()},
    });
    
    this.fetchButton.classList.add('neuroglancer-fetch-tracing-button');

    // // Text area showing how many tracing brains were fetched and what the fetch criteria were
    this.lastFetchField = document.createElement('p');
    this.lastFetchField.innerHTML = '';
    this.lastFetchField.classList.add('neuroglancer-tracing-filter-title');

    // Now add all child elements to parent filter 
    this.element.appendChild(filterField);
    this.element.appendChild(this.fetchButton);
    this.element.appendChild(this.lastFetchField);
    this.registerDisposer(() => removeFromParent(this.element));
  }
 
 async fetchTracingBrains() {
      // Filter #1
      const virusTimepoint = this.virusTimepoint.value;
      const primaryInjectionSite = this.primaryInjectionSite.value;

      if (!virusTimepoint) {
        StatusMessage.showTemporaryMessage('Please select a Virus and Timepoint from the dropdown');
        return;
      }

      if (!primaryInjectionSite) {
        StatusMessage.showTemporaryMessage('Please select a primaryInjectionSite from the dropdown');
        return;
      }

      console.log("Virus timepoint: " + virusTimepoint);
      console.log("Primary injection site: " + primaryInjectionSite);
      // Set up base url and append to it conditionally below
      let tracingURL = encodeURI(`${AppSettings.API_ENDPOINT}/tracing_annotations/${virusTimepoint}/${primaryInjectionSite}`)
      
      StatusMessage.showTemporaryMessage('Fetching tracing brains... ');
      
      try {
        const tracingJSON:TracingJSON = await fetchOk(tracingURL, {
          method: 'GET',
        }).then(response => {
          return response.json();
        });

        // const brain_names = tracingJSON.brain_names;
        const n_brains_fetched = tracingJSON.brain_urls.length;
        const primary_inj_sites = tracingJSON.primary_inj_sites;
        const frac_injections = tracingJSON.frac_injections;
        
        let lastFetchText = `Last fetch: <br />
        Virus/Timepoint: ${virusTimepoint}<br />
        Primary Injection Site: ${primaryInjectionSite}<br />
        Number of brains fetched: ${n_brains_fetched}<br />`;

        if (n_brains_fetched == 0) {
          this.lastFetchField.style.color = 'red';
        }
        else {
          this.lastFetchField.style.color = 'white';
        }
        if (n_brains_fetched > 30) {
          StatusMessage.showTemporaryMessage('More than 30 brains would be fetched. Please adjust your search to fetch 30 or fewer');
          throw("Error. Too many brains would be fetched. Please adjust your search to fetch 30 or fewer");
        }

        let brain_counter = 0;        
        tracingJSON.brain_urls.forEach((precomputed_url:string) => {
          const primary_inj_site = primary_inj_sites[brain_counter]
          const layer_name = `${virusTimepoint} PRI_INJ: ${primary_inj_site} (${String(brain_counter)})`; 
          
          // Get list of layer names 
          const layerSet = this.layer.manager.layerManager.layerSet;
          let layerNameArray = new Array<string>();
          layerSet.forEach((entry:any) => {
              layerNameArray.push(entry.name_)
            });
          let frac_injection_this_brain = Number(frac_injections[brain_counter]).toFixed(2)
          lastFetchText += `<br />Frac in primary injection site (${brain_counter}): ${frac_injection_this_brain}`
          
          // Only add new layer if layer not in layer list
          if (!layerNameArray.includes(layer_name)) {
            // pick a random color for the annotations
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            let hex_color =  '#' + randomColor;
            // Disable all layers except first 
            let visible = true;
            if (brain_counter > 0) {
              visible = false
            }
            const newLayer = makeLayer(
              this.layer.manager, layer_name,
                {type: 'annotation',
                 'source': 'precomputed://' + precomputed_url,
                 'annotationColor': hex_color,
                 'visible': visible,
                 'shaderControls': {
                   "size":2.0,
                   "opacity":0.75}
               });

            this.layer.manager.add(newLayer);
          }
          else {
            StatusMessage.showTemporaryMessage(`Layer: ${layer_name} is already loaded`);
            }
          brain_counter+=1;
        });
        this.lastFetchField.innerHTML = lastFetchText;
        StatusMessage.showTemporaryMessage(`Successfully fetched ${n_brains_fetched} tracing brains`);
        
        } catch (e) {
          StatusMessage.showTemporaryMessage('Unable to fetch tracing brains');
          throw e;
        }
    }
}