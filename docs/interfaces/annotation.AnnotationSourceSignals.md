[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation](../modules/annotation.md) / AnnotationSourceSignals

# Interface: AnnotationSourceSignals

[annotation](../modules/annotation.md).AnnotationSourceSignals

## Implemented by

- [`AnnotationSource`](../classes/annotation.AnnotationSource.md)
- [`MultiscaleAnnotationSource`](../classes/annotation_frontend_source.MultiscaleAnnotationSource.md)

## Table of contents

### Properties

- [changed](annotation.AnnotationSourceSignals.md#changed)
- [childAdded](annotation.AnnotationSourceSignals.md#childadded)
- [childDeleted](annotation.AnnotationSourceSignals.md#childdeleted)
- [childUpdated](annotation.AnnotationSourceSignals.md#childupdated)

## Properties

### changed

• **changed**: [`NullarySignal`](../classes/util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:895](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L895)

___

### childAdded

• **childAdded**: [`Signal`](../classes/util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/annotation.md#annotation)) => `void`\>

#### Defined in

[src/neuroglancer/annotation/index.ts:896](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L896)

___

### childDeleted

• **childDeleted**: [`Signal`](../classes/util_signal.Signal.md)<(`annotationId`: `string`) => `void`\>

#### Defined in

[src/neuroglancer/annotation/index.ts:898](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L898)

___

### childUpdated

• **childUpdated**: [`Signal`](../classes/util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/annotation.md#annotation)) => `void`\>

#### Defined in

[src/neuroglancer/annotation/index.ts:897](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L897)
