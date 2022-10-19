[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/annotation\_layer\_state](../modules/neuroglancer_annotation_annotation_layer_state.md) / AnnotationHoverState

# Class: AnnotationHoverState

[neuroglancer/annotation/annotation_layer_state](../modules/neuroglancer_annotation_annotation_layer_state.md).AnnotationHoverState

## Hierarchy

- [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<{ `annotationLayerState`: [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) ; `id`: `string` ; `partIndex`: `number`  } \| `undefined`\>

  ↳ **`AnnotationHoverState`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_annotation_layer_state.AnnotationHoverState.md#constructor)

### Properties

- [changed](neuroglancer_annotation_annotation_layer_state.AnnotationHoverState.md#changed)
- [value\_](neuroglancer_annotation_annotation_layer_state.AnnotationHoverState.md#value_)

### Accessors

- [value](neuroglancer_annotation_annotation_layer_state.AnnotationHoverState.md#value)

## Constructors

### constructor

• **new AnnotationHoverState**(`value_`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_` | `undefined` \| { `annotationLayerState`: [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) ; `id`: `string` ; `partIndex`: `number`  } |

#### Inherited from

[WatchableValue](neuroglancer_trackable_value.WatchableValue.md).[constructor](neuroglancer_trackable_value.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/trackable_value.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L43)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[WatchableValue](neuroglancer_trackable_value.WatchableValue.md).[changed](neuroglancer_trackable_value.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L42)

___

### value\_

• `Protected` **value\_**: `undefined` \| { `annotationLayerState`: [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) ; `id`: `string` ; `partIndex`: `number`  }

#### Inherited from

[WatchableValue](neuroglancer_trackable_value.WatchableValue.md).[value_](neuroglancer_trackable_value.WatchableValue.md#value_)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L33)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `T` |

#### Returns

`void`

#### Inherited from

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L36)
