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
import { TransformJSON } from './fetch_transformation';

const buttonText = 'Import';
const buttonTitle = 'Import annotation';

interface AnnotationJSON {
  point: Array<number>,
  type: string,
  id: string,
}

interface AnnotationLayerInfo {
  prep_id: string,
  label: string,
  input_type: string,
  input_type_id: number
}

export class FetchAnnotationWidget extends RefCounted{
  element: HTMLElement;
  private annotationSelection: HTMLSelectElement;
  private annotationSelectionDefault: HTMLSelectElement;
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

    this.setUpAnnotationList();

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
  }

  async setUpAnnotationList() {
    const url = `${AppSettings.API_ENDPOINT}/annotations`;
    try {
      const response:Array<AnnotationLayerInfo> = await fetchOk(url, {
        method: 'GET',
      }).then(response => {
        return response.json();
      });
      const annotationSelectionFetched = document.createElement('select');
      annotationSelectionFetched.classList.add('neuroglancer-fetch-annotation-selection');
      const defaultOption = document.createElement('option');
      defaultOption.text = 'Select annotation';
      defaultOption.value = '';
      defaultOption.disabled = true;
      defaultOption.selected = true;
      annotationSelectionFetched.add(defaultOption);

      response.forEach(AnnotationLayerInfo => {
        const {prep_id, label, input_type, input_type_id} = AnnotationLayerInfo;
        const option = document.createElement('option');
        option.value = `${prep_id}/${encodeURIComponent(label)}/${input_type_id}`;
        option.text = `${prep_id}/${label}/${input_type}`;
        annotationSelectionFetched.add(option);
      });

      const newElement = document.createElement('div');
      newElement.classList.add('neuroglancer-fetch-annotation-tool');
      newElement.appendChild(annotationSelectionFetched);
      newElement.appendChild(this.fetchButton);
      this.element.parentNode?.replaceChild(newElement, this.element);
      this.annotationSelection = annotationSelectionFetched;
    } catch (err) {
      StatusMessage.showTemporaryMessage('Failed to load the list of annotations, please refresh.');
    }
  }

  async fetchAnnotation() {
    const annotation = this.annotationSelection.value;
    if (!annotation) {
      StatusMessage.showTemporaryMessage('Please select the annotation to fetch.');
      return;
    }
    const msg =  StatusMessage.showMessage('Fetching annotations, this might take a while ...');
    const annotationURL = `${AppSettings.API_ENDPOINT}/annotation/${annotation}`;
    const transformURL = `${AppSettings.API_ENDPOINT}/rotation/${annotation}`;

    try {
      const annotationJSON:Array<AnnotationJSON> = await fetchOk(annotationURL, {
        method: 'GET',
      }).then(response => {
        
        return response.json();
      });
      const transformJSONResolution:TransformJSON = await fetchOk(transformURL, {
        method: 'GET',
      }).then(response => {
        return response.json();
      });
      const {resolution} = transformJSONResolution;

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
      annotationJSON.forEach((anno) =>{
        const annotation = restoreAnnotation(anno, state);
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