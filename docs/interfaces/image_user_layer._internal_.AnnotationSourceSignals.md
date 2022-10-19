[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / AnnotationSourceSignals

# Interface: AnnotationSourceSignals

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).AnnotationSourceSignals

## Implemented by

- [`AnnotationSource`](../classes/image_user_layer._internal_.AnnotationSource.md)
- [`MultiscaleAnnotationSource`](../classes/image_user_layer._internal_.MultiscaleAnnotationSource.md)

## Table of contents

### Properties

- [changed](image_user_layer._internal_.AnnotationSourceSignals.md#changed)
- [childAdded](image_user_layer._internal_.AnnotationSourceSignals.md#childadded)
- [childDeleted](image_user_layer._internal_.AnnotationSourceSignals.md#childdeleted)
- [childUpdated](image_user_layer._internal_.AnnotationSourceSignals.md#childupdated)

## Properties

### changed

• **changed**: [`NullarySignal`](../classes/coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:895](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L895)

___

### childAdded

• **childAdded**: [`Signal`](../classes/coordinate_transform._internal_.Signal.md)<(`annotation`: [`Annotation`](../modules/image_user_layer._internal_.md#annotation)) => `void`\>

#### Defined in

[src/neuroglancer/annotation/index.ts:896](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L896)

___

### childDeleted

• **childDeleted**: [`Signal`](../classes/coordinate_transform._internal_.Signal.md)<(`annotationId`: `string`) => `void`\>

#### Defined in

[src/neuroglancer/annotation/index.ts:898](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L898)

___

### childUpdated

• **childUpdated**: [`Signal`](../classes/coordinate_transform._internal_.Signal.md)<(`annotation`: [`Annotation`](../modules/image_user_layer._internal_.md#annotation)) => `void`\>

#### Defined in

[src/neuroglancer/annotation/index.ts:897](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L897)
