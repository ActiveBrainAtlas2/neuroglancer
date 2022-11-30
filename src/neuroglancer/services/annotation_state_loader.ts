import { TrackableBoolean } from "../trackable_boolean";
import { RefCounted } from "../util/disposable";
import './annotation_state_loader.css';

/**
 * This class takes care of the maintaining the state of whether the annotations are saved or not.
 */
 export class AnnotationStateLoader extends RefCounted {
    element = document.createElement('div');

    constructor(public annotationsSavedState: TrackableBoolean) {
        super();
        this.makeUIElement();
        if (annotationsSavedState.value) {
            this.element.classList.add('annotation-state-loader-hidden');
        } else {
            this.element.classList.add('annotation-state-loader');
        }
        this.registerDisposer(this.annotationsSavedState.changed.add(() => {
            if (this.annotationsSavedState.value) {
                this.element.classList.add('annotation-state-loader-hidden');
                this.element.classList.remove('annotation-state-loader');
            } else {
                this.element.classList.add('annotation-state-loader');
                this.element.classList.remove('annotation-state-loader-hidden');
            }
        }));
    }

    makeUIElement() {
        // TODO: add code for UI element
        this.element.innerText = "ANNOTATIONS NOT SAVED";
    }
};