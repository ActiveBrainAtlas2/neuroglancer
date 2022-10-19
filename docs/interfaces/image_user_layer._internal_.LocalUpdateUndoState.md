[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / LocalUpdateUndoState

# Interface: LocalUpdateUndoState

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).LocalUpdateUndoState

## Table of contents

### Properties

- [commitInProgress](image_user_layer._internal_.LocalUpdateUndoState.md#commitinprogress)
- [existingAnnotation](image_user_layer._internal_.LocalUpdateUndoState.md#existingannotation)
- [pendingCommit](image_user_layer._internal_.LocalUpdateUndoState.md#pendingcommit)
- [reference](image_user_layer._internal_.LocalUpdateUndoState.md#reference)
- [type](image_user_layer._internal_.LocalUpdateUndoState.md#type)

## Properties

### commitInProgress

• **commitInProgress**: `undefined` \| ``null`` \| [`Annotation`](../modules/image_user_layer._internal_.md#annotation)

If not undefined, a commit has been sent to the backend, and we are waiting for the result.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L327)

___

### existingAnnotation

• **existingAnnotation**: `undefined` \| [`Annotation`](../modules/image_user_layer._internal_.md#annotation)

The state of the annotation prior to any local modifications.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L322)

___

### pendingCommit

• **pendingCommit**: `undefined` \| ``null`` \| [`Annotation`](../modules/image_user_layer._internal_.md#annotation)

If commitInProgress === undefined, this must be undefined.  Otherwise, it specifies a commit
that has been requested and which will be initiated as soon as the in-progress request
completes.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L315)

___

### reference

• **reference**: [`AnnotationReference`](../classes/image_user_layer._internal_.AnnotationReference.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L317)

___

### type

• **type**: [`AnnotationType`](../enums/image_user_layer._internal_.AnnotationType.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L328)
