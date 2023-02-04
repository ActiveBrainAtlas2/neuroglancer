import './fetch_mouselight_neurons.css';
import {StatusMessage} from 'neuroglancer/status';
import {RefCounted} from 'neuroglancer/util/disposable';
import {removeFromParent} from 'neuroglancer/util/dom';
import {fetchOk} from 'neuroglancer/util/http_request';
import {makeIcon} from 'neuroglancer/widget/icon';
import {AppSettings} from 'neuroglancer/services/service';
import type {SegmentationUserLayer} from 'neuroglancer/segmentation_user_layer';
import {Uint64} from 'neuroglancer/util/uint64';

interface NeuronJSON {
  segmentId: Array<number>
}

interface AnatomicalJSON {
  segment_names: Array<string>
}

export class FetchMouselightNeuronsWidget extends RefCounted{
  public element: HTMLElement;
  private filterFieldSecond: HTMLElement;
  private anatomicalSelection: HTMLSelectElement;
  private anatomicalSelectionDefault: HTMLSelectElement;
  private filterType: HTMLSelectElement;
  private operatorType: HTMLSelectElement;
  private filterThreshold: HTMLInputElement;

  private secondFilterCheckbox: HTMLInputElement
  private anatomicalSelectionSecond: HTMLSelectElement;
  private anatomicalSelectionDefaultSecond: HTMLSelectElement;
  private filterTypeSecond: HTMLSelectElement;
  private operatorTypeSecond: HTMLSelectElement;
  private filterThresholdSecond: HTMLInputElement;

  private fetchSomataCheckbox: HTMLInputElement
  private fetchAxonsCheckbox: HTMLInputElement
  private fetchDendritesCheckbox: HTMLInputElement
  private fetchButton: HTMLElement;
  private numberNeuronsShownField: HTMLElement

  constructor(public layer: SegmentationUserLayer, public layerName: string) {
    super();
    const buttonText = 'Click to fetch';
    const buttonTitle = 'Fetch mouselight neurons';
    const operatorTypeOptions = [">",">=","<","<=","="];
    const operatorTypeOptionValues = ["gt","gte","lt","lte","exact"];
    const filterTypeOptions = ["axon_endpoints","axon_branches","dendrite_endpoints","dendrite_branches","soma"];
    const atlasName = layerName.split("_mouselight")[0];

    // Make the overall div for this tool
    this.element = document.createElement('div');
    this.element.classList.add('neuroglancer-fetch-mouselight-tool');

    // Title for the tool
    const fetchTitle = document.createElement('h3');
    fetchTitle.innerText = "Neuron fetch tool"
    fetchTitle.classList.add('neuroglancer-mouselight-tool-title')

    ///////// FILTER #1 /////////
    // Make the div for this fitler (i.e. set of fields)
    const filterField = document.createElement('div');
    // Filter name field
    const filterTitle = document.createElement('p')
    filterTitle.innerHTML = 'Filter #1'
    filterTitle.classList.add('neuroglancer-mouselight-filter-title')
    // filter type -- e.g. "axonal end point" ,
    // "axonal branch point", "soma", etc..
    this.filterType = document.createElement('select');
    this.filterType.id = "mouselight-filter-type-1";
    this.filterType.classList.add('neuroglancer-fetch-mouselight-selection');
    const defaultOptionFilterType = document.createElement('option');
    defaultOptionFilterType.text = 'Select neuron part';
    defaultOptionFilterType.value = '';
    defaultOptionFilterType.disabled = true;
    defaultOptionFilterType.selected = true;
    this.filterType.add(defaultOptionFilterType);

    // Add listener to check if soma is selected. If so, hide the operator type and threshold

    this.filterType.addEventListener(
      'change', () => this.filterChangeHandler(this.filterType));

    filterTypeOptions.forEach((option:string) => {
        const filter_option = document.createElement('option');
        filter_option.value = option;
        filter_option.text = option;
        this.filterType.add(filter_option);
      });

    // Anatomical region
    this.anatomicalSelectionDefault = document.createElement('select');
    this.anatomicalSelectionDefault.classList.add('neuroglancer-fetch-mouselight-selection');
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Loading anatomical regions';
    defaultOption.value = '';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    this.anatomicalSelectionDefault.add(defaultOption);
    this.setUpAnatomicalRegionsList(atlasName);
    
    // Operator type -- is a dropdown of >, <, >=, <=, =, 
    this.operatorType = document.createElement('select');
    this.operatorType.id = "mouselight-operator-type-1";
    this.operatorType.classList.add('neuroglancer-fetch-mouselight-selection');
 
    // eslint-disable-next-line no-var
    for(var i = 0; i < operatorTypeOptions.length; i++) {
        const filter_option = document.createElement('option');
        filter_option.text = operatorTypeOptions[i];
        filter_option.value = operatorTypeOptionValues[i];
        this.operatorType.add(filter_option);
    }
    // Filter Threshold -- numeric input
    this.filterThreshold = document.createElement('input');
    this.filterThreshold.id = "mouselight-filter-threshold-1";
    this.filterThreshold.type = 'text'
    this.filterThreshold.placeholder = 'Threshold (integer)'
    this.filterThreshold.classList.add('neuroglancer-fetch-mouselight-threshold');

    // Second filter  box 
    const secondFilterCheckboxElement = document.createElement('div');
    secondFilterCheckboxElement.classList.add('neuroglancer-mouselight-newfilter-checkbox')
    this.secondFilterCheckbox = document.createElement('input');
    this.secondFilterCheckbox.type = 'checkbox';
    this.secondFilterCheckbox.addEventListener(
      'change', () => this.checkboxHandler(this.secondFilterCheckbox));

    const secondFilterCheckboxText = document.createElement('p');
    secondFilterCheckboxText.innerHTML = 'Add another filter';
    secondFilterCheckboxElement.appendChild(this.secondFilterCheckbox);
    secondFilterCheckboxElement.appendChild(secondFilterCheckboxText);
    // Add child elements to parent filter element
    filterField.appendChild(fetchTitle);
    filterField.appendChild(filterTitle);
    filterField.appendChild(this.filterType);
    filterField.appendChild(this.anatomicalSelectionDefault);
    filterField.appendChild(this.operatorType);
    filterField.appendChild(this.filterThreshold);
    filterField.appendChild(secondFilterCheckboxElement);

    ///////// FILTER #2, hidden by default /////////
    this.filterFieldSecond = document.createElement('div');
    this.filterFieldSecond.style.display = "none";

    // Filter name field
    const filterTitleSecond = document.createElement('p');
    filterTitleSecond.innerHTML = 'Filter #2';
    filterTitleSecond.classList.add('neuroglancer-mouselight-filter-title');
    
    // filter type -- e.g. "axonal end point" ,
    // "axonal branch point", "soma", etc..
    this.filterTypeSecond = document.createElement('select');
    this.filterTypeSecond.id = "mouselight-filter-type-2";

    this.filterTypeSecond.classList.add('neuroglancer-fetch-mouselight-selection');
    const defaultOptionFilterTypeSecond = document.createElement('option');
    defaultOptionFilterTypeSecond.text = 'Select neuron part';
    defaultOptionFilterTypeSecond.value = '';
    defaultOptionFilterTypeSecond.disabled = true;
    defaultOptionFilterTypeSecond.selected = true;
    this.filterTypeSecond.add(defaultOptionFilterTypeSecond);

    // Add listener to check if soma is selected. If so, hide the operator type and threshold

    this.filterTypeSecond.addEventListener(
      'change', () => this.filterChangeHandler(this.filterTypeSecond));

    filterTypeOptions.forEach((option:string) => {
        const filter_option = document.createElement('option');
        filter_option.value = option;
        filter_option.text = option;
        this.filterTypeSecond.add(filter_option);
      });

    // Anatomical region
    this.anatomicalSelectionDefaultSecond = document.createElement('select');
    this.anatomicalSelectionDefaultSecond.classList.add('neuroglancer-fetch-mouselight-selection');
    const defaultOptionSecond = document.createElement('option');
    defaultOptionSecond.text = 'Loading anatomical regions';
    defaultOptionSecond.value = '';
    defaultOptionSecond.disabled = true;
    defaultOptionSecond.selected = true;
    this.anatomicalSelectionDefaultSecond.add(defaultOptionSecond);
    this.anatomicalSelectionSecond = this.anatomicalSelectionDefaultSecond;
    
    // Operator type -- is a dropdown of >, <, >=, <=, =, 
    this.operatorTypeSecond = document.createElement('select');
    this.operatorTypeSecond.id = "mouselight-operator-type-2";
    this.operatorTypeSecond.classList.add('neuroglancer-fetch-mouselight-selection');
    // eslint-disable-next-line no-var
    for(var i = 0; i < operatorTypeOptions.length; i++) {
        const filter_option = document.createElement('option');
        filter_option.text = operatorTypeOptions[i];
        filter_option.value = operatorTypeOptionValues[i];
        this.operatorTypeSecond.add(filter_option);
    }
    // Filter Threshold -- numeric input
    this.filterThresholdSecond = document.createElement('input');
    this.filterThresholdSecond.id = "mouselight-filter-threshold-2";

    this.filterThresholdSecond.type = 'text'
    this.filterThresholdSecond.placeholder = 'Threshold (integer)'
    this.filterThresholdSecond.classList.add('neuroglancer-fetch-mouselight-threshold');
    // 
    this.filterFieldSecond.appendChild(filterTitleSecond);
    this.filterFieldSecond.appendChild(this.filterTypeSecond);
    this.filterFieldSecond.appendChild(this.anatomicalSelectionSecond);
    this.filterFieldSecond.appendChild(this.operatorTypeSecond);
    this.filterFieldSecond.appendChild(this.filterThresholdSecond);

    // What part of neuron to fetch - three checkboxes centered
    const neuronPartElementTitle = document.createElement('span'); // div to hold all three checkboxes
    neuronPartElementTitle.classList.add('neuroglancer-mouselight-neuronpart-title');
    neuronPartElementTitle.innerHTML = "Choose neuron parts to fetch";
    const neuronPartElement = document.createElement('div'); // div to hold all three checkboxes
    neuronPartElement.classList.add('neuroglancer-mouselight-neuronpart')
    
    this.fetchSomataCheckbox = document.createElement('input');
    this.fetchSomataCheckbox.type = 'checkbox';
    this.fetchSomataCheckbox.checked = true;
    const fetchSomataCheckboxText = document.createElement('p');
    fetchSomataCheckboxText.innerHTML = 'Somata';

    this.fetchAxonsCheckbox = document.createElement('input');
    this.fetchAxonsCheckbox.type = 'checkbox';
    this.fetchAxonsCheckbox.checked = true;
    const fetchAxonsCheckboxText = document.createElement('p');
    fetchAxonsCheckboxText.innerHTML = 'Axons';

    this.fetchDendritesCheckbox = document.createElement('input');
    this.fetchDendritesCheckbox.type = 'checkbox';
    this.fetchDendritesCheckbox.checked = true;
    const fetchDendritesCheckboxText = document.createElement('p');
    fetchDendritesCheckboxText.innerHTML = 'Dendrites';
    
    neuronPartElement.appendChild(this.fetchSomataCheckbox);
    neuronPartElement.appendChild(fetchSomataCheckboxText);
    neuronPartElement.appendChild(this.fetchAxonsCheckbox);
    neuronPartElement.appendChild(fetchAxonsCheckboxText);
    neuronPartElement.appendChild(this.fetchDendritesCheckbox);
    neuronPartElement.appendChild(fetchDendritesCheckboxText);

    // SUBMIT QUERY BUTTON
    this.fetchButton = makeIcon({
      text: buttonText,
      title: buttonTitle,
      onClick: () => {this.fetchNeurons(atlasName)},
    });
    
    this.fetchButton.classList.add('neuroglancer-fetch-mouselight-button');

    // Text area showing how many neurons are shown
    this.numberNeuronsShownField = document.createElement('p');
    this.numberNeuronsShownField.innerHTML = '';
    this.numberNeuronsShownField.classList.add('neuroglancer-mouselight-filter-title');

    // Now add all child elements to parent filter 
    this.element.appendChild(filterField);
    this.element.appendChild(this.filterFieldSecond);
    this.element.appendChild(neuronPartElementTitle);
    this.element.appendChild(neuronPartElement);
    this.element.appendChild(this.fetchButton);
    this.element.appendChild(this.numberNeuronsShownField);
    this.registerDisposer(() => removeFromParent(this.element));
  }

  private filterChangeHandler(elem: HTMLSelectElement) {

    const parent: any = elem.parentNode;
    if (elem.value == 'soma') {
      for (let i = 0; i < parent.children.length; i++) {
        const child = parent.children[i];
        if (child.id.includes('operator-type') || child.id.includes('threshold')) {
          child.style.display = "none";
        }
      }
    }
    else {
      for (let i = 0; i < parent.children.length; i++) {
        const child = parent.children[i];
        if (child.id.includes('operator-type') || child.id.includes('threshold')) {
          child.style.display = "block";
        }
      }
    }
  }

  private checkboxHandler(elem: HTMLInputElement) {
    if (elem.checked) {
      this.filterFieldSecond.style.display = "block";
    }
    else {
      this.filterFieldSecond.style.display = "none";
    }
  }

  async setUpAnatomicalRegionsList(atlasName: string) {

      const anatomicalURL = `${AppSettings.API_ENDPOINT}/anatomical_regions/${atlasName}`;
      try {
        const anatomicalJSON:AnatomicalJSON = await fetchOk(anatomicalURL, {
          method: 'GET',
        }).then(response => {
          return response.json();
        });

      // Make new select element and fill with anatomical regions we fetched from API
      const mouselightAnatomicalRegions = document.createElement('select');
      mouselightAnatomicalRegions.classList.add('neuroglancer-fetch-mouselight-selection');
      const defaultOption = document.createElement('option');
        defaultOption.text = 'Select anatomical region';
        defaultOption.value = '';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.classList.add('default')
        mouselightAnatomicalRegions.add(defaultOption);
      
      const segment_names = anatomicalJSON.segment_names;
      segment_names.forEach((segment_name:string) => {
        const option = document.createElement('option');
        option.value = segment_name;
        option.text = segment_name;
        mouselightAnatomicalRegions.add(option);
      });

      
      // Filter #1, replace the anatomical regions select element with this new element
      this.anatomicalSelectionDefault.parentNode?.replaceChild(
        mouselightAnatomicalRegions, this.anatomicalSelectionDefault);
      
      this.anatomicalSelection = mouselightAnatomicalRegions;
      // Filter #2, first clone html element we just made.
      // then replace the second anatomical regions select element with this cloned element
      const mouselightAnatomicalRegionsSecond = <HTMLSelectElement>mouselightAnatomicalRegions.cloneNode(true);
      mouselightAnatomicalRegionsSecond.value = '';
      this.anatomicalSelectionDefaultSecond.parentNode?.replaceChild(
        mouselightAnatomicalRegionsSecond, this.anatomicalSelectionDefaultSecond);
      this.anatomicalSelectionSecond = mouselightAnatomicalRegionsSecond;

        
      } catch (e) {
        StatusMessage.showTemporaryMessage('Failed to load list of anatomical regions');
      }
  }

  async fetchNeurons(atlasName: string) {
      // Filter #1
      const filterType = this.filterType.value;
      const operatorType = this.operatorType.value;
      const anatomicalSelection = this.anatomicalSelection.value;
      const fetchSomata = this.fetchSomataCheckbox.checked;
      const fetchAxons = this.fetchAxonsCheckbox.checked;
      const fetchDendrites = this.fetchDendritesCheckbox.checked;
      let n_parts_tofetch = 0;
      if (fetchSomata) {
        n_parts_tofetch+=1
      }
      if (fetchAxons) {
        n_parts_tofetch+=1
      }
      if (fetchDendrites) {
        n_parts_tofetch+=1
      }

      // Must choose to fetch at least one neuron part
      if (n_parts_tofetch == 0) {
        StatusMessage.showTemporaryMessage('Please select at least one neuron part to fetch')
        this.numberNeuronsShownField.innerHTML = 'Please select at least one neuron part to fetch';
        this.numberNeuronsShownField.style.color = 'red';
        return;
      }

      if (!filterType) {
        StatusMessage.showTemporaryMessage('Please select a neuron part for filter #1');
        return;
      }

      if (!anatomicalSelection) {
        StatusMessage.showTemporaryMessage('Please select an anatomical region for filter #1');
        return;
      }
      // Set up base url and append to it conditionally below
      let neuronURL = `${AppSettings.API_ENDPOINT}/mlneurons/${atlasName}/${fetchSomata}-${fetchAxons}-${fetchDendrites}/${filterType}/${anatomicalSelection}`
      
      if (filterType != 'soma') {
        const filterThreshold = this.filterThreshold.value;
        if (!filterThreshold) {
          StatusMessage.showTemporaryMessage('Please select a threshold for filter #1');
          return;
        }
        neuronURL += `/${operatorType}/${filterThreshold}`;
      }
    
      /// Filter #2      
      const filterTypeSecond = this.filterTypeSecond.value;
      const operatorTypeSecond = this.operatorTypeSecond.value;
      const anatomicalSelectionSecond = this.anatomicalSelectionSecond.value;

      // Check if second filter being used
      if (this.secondFilterCheckbox.checked) {

        if (!filterTypeSecond) {
          StatusMessage.showTemporaryMessage('Please select a neuron part for filter #2');
          return;
        }

        if (!anatomicalSelectionSecond) {
          StatusMessage.showTemporaryMessage('Please select an anatomical region for filter #2');
          return;
        }

        neuronURL += `/${filterTypeSecond}/${anatomicalSelectionSecond}`;
        if (filterTypeSecond != 'soma') {
          const filterThresholdSecond = this.filterThresholdSecond.value;
          if (!filterThresholdSecond) {
            StatusMessage.showTemporaryMessage('Please select a threshold for filter #2');
            return;
          }
          neuronURL += `/${operatorTypeSecond}/${filterThresholdSecond}`;
        }
      }

      StatusMessage.showTemporaryMessage('Fetching mouselight neurons... ');
      StatusMessage.showTemporaryMessage(`API call: ${neuronURL}`,5000);
      
      try {
        const neuronJSON:NeuronJSON = await fetchOk(neuronURL, {
          method: 'GET',
        }).then(response => {
          return response.json();
        });
        const group = this.layer.displayState.segmentationGroupState.value;
        // let counter = 0;
        const n_neurons_fetched = neuronJSON.segmentId.length/n_parts_tofetch;
        // if we filtered out
        // if (fetchSomata && !fetchAxons && !fetchDendrites)
        this.numberNeuronsShownField.innerHTML = `Number of neurons in last fetch:  ${n_neurons_fetched}`;
        if (n_neurons_fetched == 0) {
          this.numberNeuronsShownField.style.color = 'red';
        }
        else {
          this.numberNeuronsShownField.style.color = 'white';
        }
        neuronJSON.segmentId.forEach((segid:number) => {
          const id = new Uint64(segid);

          group.visibleSegments.add(id);
          // const option = document.createElement('option');
          // option.value = `${prep_id}/${encodeURIComponent(layer)}/${input_type_id}`;
          // option.text = `${prep_id}/${layer}/${input_type}`;
          // annotationSelectionFetched.add(option);
        });
        StatusMessage.showTemporaryMessage(`Successfully fetched ${n_neurons_fetched}  mouselight neurons`);
        
        } catch (e) {
          StatusMessage.showTemporaryMessage('Unable to fetch the mouselight neurons');
          throw e;
        }
    }

}