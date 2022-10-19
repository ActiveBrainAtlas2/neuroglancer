[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation](../modules/neuroglancer_annotation.md) / AnnotationSourceSignals

# Interface: AnnotationSourceSignals

[neuroglancer/annotation](../modules/neuroglancer_annotation.md).AnnotationSourceSignals

## Implemented by

- [`AnnotationSource`](../classes/neuroglancer_annotation.AnnotationSource.md)
- [`MultiscaleAnnotationSource`](../classes/neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md)

## Table of contents

### Properties

- [changed](neuroglancer_annotation.AnnotationSourceSignals.md#changed)
- [childAdded](neuroglancer_annotation.AnnotationSourceSignals.md#childadded)
- [childDeleted](neuroglancer_annotation.AnnotationSourceSignals.md#childdeleted)
- [childUpdated](neuroglancer_annotation.AnnotationSourceSignals.md#childupdated)

## Properties

### changed

• **changed**: [`NullarySignal`](../classes/neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:895](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L895)

___

### childAdded

• **childAdded**: [`Signal`](../classes/neuroglancer_util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/neuroglancer_annotation.md#annotation)) => `void`\>

#### Defined in

[src/neuroglancer/annotation/index.ts:896](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L896)

___

### childDeleted

• **childDeleted**: [`Signal`](../classes/neuroglancer_util_signal.Signal.md)<(`annotationId`: `string`) => `void`\>

#### Defined in

[src/neuroglancer/annotation/index.ts:898](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L898)

___

### childUpdated

• **childUpdated**: [`Signal`](../classes/neuroglancer_util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/neuroglancer_annotation.md#annotation)) => `void`\>

#### Defined in

[src/neuroglancer/annotation/index.ts:897](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L897)
