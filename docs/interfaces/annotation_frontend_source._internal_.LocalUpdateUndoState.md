[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/frontend\_source](../modules/annotation_frontend_source.md) / [<internal\>](../modules/annotation_frontend_source._internal_.md) / LocalUpdateUndoState

# Interface: LocalUpdateUndoState

[annotation/frontend_source](../modules/annotation_frontend_source.md).[<internal>](../modules/annotation_frontend_source._internal_.md).LocalUpdateUndoState

## Table of contents

### Properties

- [commitInProgress](annotation_frontend_source._internal_.LocalUpdateUndoState.md#commitinprogress)
- [existingAnnotation](annotation_frontend_source._internal_.LocalUpdateUndoState.md#existingannotation)
- [pendingCommit](annotation_frontend_source._internal_.LocalUpdateUndoState.md#pendingcommit)
- [reference](annotation_frontend_source._internal_.LocalUpdateUndoState.md#reference)
- [type](annotation_frontend_source._internal_.LocalUpdateUndoState.md#type)

## Properties

### commitInProgress

• **commitInProgress**: `undefined` \| ``null`` \| [`Annotation`](../modules/annotation.md#annotation)

If not undefined, a commit has been sent to the backend, and we are waiting for the result.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L327)

___

### existingAnnotation

• **existingAnnotation**: `undefined` \| [`Annotation`](../modules/annotation.md#annotation)

The state of the annotation prior to any local modifications.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L322)

___

### pendingCommit

• **pendingCommit**: `undefined` \| ``null`` \| [`Annotation`](../modules/annotation.md#annotation)

If commitInProgress === undefined, this must be undefined.  Otherwise, it specifies a commit
that has been requested and which will be initiated as soon as the in-progress request
completes.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L315)

___

### reference

• **reference**: [`AnnotationReference`](../classes/annotation.AnnotationReference.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L317)

___

### type

• **type**: [`AnnotationType`](../enums/annotation.AnnotationType.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L328)
