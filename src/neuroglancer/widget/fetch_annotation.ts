import './fetch_annotation.css';
import {AnnotationSource, restoreAnnotation} from 'neuroglancer/annotation/index';
import {StatusMessage} from 'neuroglancer/status';
import {AnnotationLayerView} from 'neuroglancer/ui/annotations';
import {RefCounted} from 'neuroglancer/util/disposable';
import {removeFromParent} from 'neuroglancer/util/dom';
import {fetchOk} from 'neuroglancer/util/http_request';
import {makeIcon} from 'neuroglancer/widget/icon';
import {AppSettings} from 'neuroglancer/services/service';
import { LoadedLayerDataSource } from '../layer_data_source';
import { WatchableCoordinateSpaceTransform } from '../coordinate_transform';
import { updateCoordinateSpaceScaleValues } from './coordinate_transform';
import { packColor, parseRGBColorSpecification } from '../util/color';

const buttonText = 'Import';
const buttonTitle = 'Import annotation';

interface AnnotationJSON {
  point: Array<number>,
  type: string,
  id: string,
  description: string
}

interface Resolution {
  resolution: Array<number>,
}

interface ComAnnotationInfo {
  prep_id: string,
  annotator: string,
  annotator_id: string
  source: string,
  count: string,
}

interface CellAnnotationInfo {
  session_id:string,
  prep_id: string,
  annotator: string,
  source: string,
  structure: string,
  cell_type: string,
}

interface VolumeAnnotationInfo {
  session_id:string,
  prep_id: string,
  annotator: string,
  brain_region: string,
}

export class FetchAnnotationWidget extends RefCounted{
  element: HTMLElement;
  private annotationSelection: HTMLSelectElement;
  private annotationSelectionDefault: HTMLSelectElement;
  private annotationTypeSelection: HTMLSelectElement;
  private fetchButton: HTMLElement;

  constructor(private layerView: AnnotationLayerView) {
    super();
    this.layerView = layerView;

    this.annotationSelectionDefault = document.createElement('select');
    this.annotationSelectionDefault.classList.add('neuroglancer-fetch-annotation-selection');
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Loading annotations';
    defaultOption.value = '';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    this.annotationSelectionDefault.add(defaultOption);
    this.annotationSelection = this.annotationSelectionDefault;
    this.fetchButton = makeIcon({
      text: buttonText,
      title: buttonTitle,
      onClick: () => {this.fetchAnnotation()},
    });
    this.fetchButton.classList.add('neuroglancer-fetch-annotation-button');
    this.element = document.createElement('div');
    this.element.classList.add('neuroglancer-fetch-annotation-tool');
    this.element.appendChild(this.annotationSelection);
    this.element.appendChild(this.fetchButton);
    this.registerDisposer(() => removeFromParent(this.element));
    this.setUpAnnotationList();
  }

async updateElement() {
  try {
  const newElement = document.createElement('div');
      newElement.classList.add('neuroglancer-fetch-annotation-tool');
      newElement.appendChild(this.annotationTypeSelection);
      newElement.appendChild(this.annotationSelection);
      newElement.appendChild(this.fetchButton);
      this.element.parentNode?.replaceChild(newElement, this.element);
      this.element = newElement
    } catch (err) {
      StatusMessage.showTemporaryMessage('Failed to load the list of annotations, please refresh.');
    }
}

async updateAnnotationList(type:string) {
  this.annotationSelection = this.annotationSelectionDefault
  this.updateElement()
  const annotationSelection = document.createElement('select');
  annotationSelection.classList.add('neuroglancer-fetch-annotation-selection');
  switch(type) { 
    case 'COM': { 
      const url = `${AppSettings.API_ENDPOINT}/get_com_list`;
      try {
        const response:Array<ComAnnotationInfo> = await fetchOk(url, {
          method: 'GET',
        }).then(response => {
          return response.json();
        });
        response.forEach(ComAnnotationInfo => {
          const {prep_id, annotator, annotator_id, source,count} = ComAnnotationInfo;
          const option = document.createElement('option');
          option.value = `${prep_id}_${annotator_id}_${source}`;
          option.text = `${prep_id}/${annotator}/${source}/count=${count}`;
          annotationSelection.add(option);
        });
        this.annotationSelection = annotationSelection
        this.updateElement()
      } catch (err) {
        StatusMessage.showTemporaryMessage('Failed to load the list of annotations, please refresh.');
      }
       break; 
    } 
    case 'Cell': { 
      const url = `${AppSettings.API_ENDPOINT}/get_marked_cell_list`;
      try {
        const response:Array<CellAnnotationInfo> = await fetchOk(url, {
          method: 'GET',
        }).then(response => {
          return response.json();
        });
        response.forEach(CellAnnotationInfo => {

          const {session_id,prep_id, annotator, source,structure,cell_type} = CellAnnotationInfo;
          const option = document.createElement('option');
          // We need to send the prep_it to get the resolutionUrl correct
          // option.value = `${session_id}`; // NOGOOD
          option.value = `${prep_id}_${session_id}`;
          option.text = `${prep_id}/${annotator}/${source}/${structure}/${cell_type}`;
          annotationSelection.add(option);
        });
        this.annotationSelection = annotationSelection
        this.updateElement()
      } catch (err) {
        StatusMessage.showTemporaryMessage('Failed to load the list of annotations, please refresh.');
      }
       break; 
    } 
    case 'Volume': {
      const url = `${AppSettings.API_ENDPOINT}/get_volume_list`;
      try {
        const response: Array<VolumeAnnotationInfo> = await fetchOk(url, {
          method: 'GET',
        }).then(response => {
          return response.json();
        });
        response.forEach(VolumeAnnotationInfo => {
          const { session_id, prep_id, annotator, brain_region } = VolumeAnnotationInfo;
          const option = document.createElement('option');
          // We need to send the prep_it to get the resolutionUrl correct
          // option.value = `${session_id}`; // NOGOOD
          option.value = `${prep_id}_${session_id}`;
          option.text = `${prep_id}/${annotator}/${brain_region}`;
          annotationSelection.add(option);
        });
        this.annotationSelection = annotationSelection
        this.updateElement()
      } catch (err) {
        StatusMessage.showTemporaryMessage('Failed to load the list of annotations, please refresh.');
      }
      break;
    } 
 } 
  };

  async setUpAnnotationList() {
      const annotationTypes = document.createElement('select');
      annotationTypes.classList.add('neuroglancer-annotation-type-selection');
      let types = ['Volume','Cell','COM'];
      for (var type of types) {
        const typeOption = document.createElement('option');
        typeOption.text = type;
        typeOption.value = type;
        typeOption.selected = true;
        annotationTypes.add(typeOption);
      }
      annotationTypes.addEventListener('change', 
      async()=> {
      const annotationType = this.annotationTypeSelection.value;
      this.updateAnnotationList(annotationType);
    },);
      this.annotationTypeSelection = annotationTypes
      this.updateAnnotationList('COM')
  }

  async fetchAnnotation() {
    const annotation = this.annotationSelection.value;
    const type = this.annotationTypeSelection.value;
    const comParameters = annotation.split('_')
    var annotationURL:string = ''
    if (!annotation) {
      StatusMessage.showTemporaryMessage('Please select the annotation to fetch.');
      return;
    }
    const msg =  StatusMessage.showMessage('Fetching annotations, this might take a while ...');
    // comParameters contains prep_id. It is always the first element
    const resolutionURL = `${AppSettings.API_ENDPOINT}/resolution/${comParameters[0]}`;
    switch(type) { 
      case 'COM': { 
        annotationURL = `${AppSettings.API_ENDPOINT}/get_com/${comParameters[0]}/${comParameters[1]}/${comParameters[2]}`;
         break; 
      } 
      case 'Cell': { 
        annotationURL = `${AppSettings.API_ENDPOINT}/get_marked_cell/${comParameters[1]}`;
         break; 
      } 
      case 'Volume': { 
        annotationURL = `${AppSettings.API_ENDPOINT}/get_volume/${comParameters[1]}`;
        break; 
     }  
   } 
    
    try {
      const annotationJSON:Array<AnnotationJSON> = await fetchOk(annotationURL, {
        method: 'GET',
      }).then(response => {
        
        return response.json();
      });
      const animalResolution:Resolution = await fetchOk(resolutionURL, {
        method: 'GET',
      }).then(response => {
        return response.json();
      });
      const {resolution} = animalResolution;

      const state = this.layerView.annotationStates.states[0].source as AnnotationSource;
      let transform : WatchableCoordinateSpaceTransform | undefined = undefined;
      if (this.layerView.layer.dataSources.length > 0) {
        const loaded = <LoadedLayerDataSource>(this.layerView.layer.dataSources[0].loadState);
        if (loaded) {
          transform = loaded.transform;
        }
      }

      let addedCount:number = 0;
      let duplicateCount:number = 0;
      let colorIdx = -1;
      let colorValue :number|undefined = undefined;
      if (this.layerView.layer.annotationColorPicker !== undefined) {
        colorValue = packColor(parseRGBColorSpecification(this.layerView.layer.annotationColorPicker!.getColor()));
      }
      for (let idx = 0; idx < state.properties.length; idx++) {
        const property = state.properties[idx];
        if (property.identifier === 'color') {
          colorIdx = idx;
          break;
        }
      }
      annotationJSON.forEach((anno) =>{
        const annotation = restoreAnnotation(anno, state);
        if (!Object.prototype.hasOwnProperty.call(anno, 'props') && colorIdx >= 0 && colorValue !== undefined) {
          annotation.properties[colorIdx] = colorValue;
        }
        try {
          state.add(annotation);
          addedCount++;
        } catch (e) {
          duplicateCount++;
        }
      });

      if (transform !== undefined) {
        const scalesAndUnits : {scale: number; unit: string;}[] = resolution.map(x => {
          return {scale: x*1e-6, unit: 'm'}
        });
        const modified = new Array<boolean>(transform.value.rank);
        modified[0] = true;
        modified[1] = true;
        modified[2] = true;
        updateCoordinateSpaceScaleValues(scalesAndUnits, modified, transform.inputSpace);
      }

      msg.dispose();
      if (duplicateCount) {
        StatusMessage.showTemporaryMessage(`${addedCount} annotations added; ${duplicateCount} duplicate annotations not added.`);
      } else {
        StatusMessage.showTemporaryMessage(`${addedCount} annotations added.`);
      }
    } catch (e) {
      StatusMessage.showTemporaryMessage('Unable to get the annotation.');
      throw e;
    }
  }
}