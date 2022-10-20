[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/frontend\_source](../modules/neuroglancer_annotation_frontend_source.md) / [<internal\>](../modules/neuroglancer_annotation_frontend_source._internal_.md) / LocalUpdateUndoState

# Interface: LocalUpdateUndoState

[neuroglancer/annotation/frontend_source](../modules/neuroglancer_annotation_frontend_source.md).[<internal>](../modules/neuroglancer_annotation_frontend_source._internal_.md).LocalUpdateUndoState

## Table of contents

### Properties

- [commitInProgress](neuroglancer_annotation_frontend_source._internal_.LocalUpdateUndoState.md#commitinprogress)
- [existingAnnotation](neuroglancer_annotation_frontend_source._internal_.LocalUpdateUndoState.md#existingannotation)
- [pendingCommit](neuroglancer_annotation_frontend_source._internal_.LocalUpdateUndoState.md#pendingcommit)
- [reference](neuroglancer_annotation_frontend_source._internal_.LocalUpdateUndoState.md#reference)
- [type](neuroglancer_annotation_frontend_source._internal_.LocalUpdateUndoState.md#type)

## Properties

### commitInProgress

• **commitInProgress**: `undefined` \| ``null`` \| [`Annotation`](../modules/neuroglancer_annotation.md#annotation)

If not undefined, a commit has been sent to the backend, and we are waiting for the result.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L327)

___

### existingAnnotation

• **existingAnnotation**: `undefined` \| [`Annotation`](../modules/neuroglancer_annotation.md#annotation)

The state of the annotation prior to any local modifications.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L322)

___

### pendingCommit

• **pendingCommit**: `undefined` \| ``null`` \| [`Annotation`](../modules/neuroglancer_annotation.md#annotation)

If commitInProgress === undefined, this must be undefined.  Otherwise, it specifies a commit
that has been requested and which will be initiated as soon as the in-progress request
completes.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L315)

___

### reference

• **reference**: [`AnnotationReference`](../classes/neuroglancer_annotation.AnnotationReference.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L317)

___

### type

• **type**: [`AnnotationType`](../enums/neuroglancer_annotation.AnnotationType.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L328)
