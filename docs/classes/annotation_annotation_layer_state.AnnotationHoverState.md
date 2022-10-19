[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / AnnotationHoverState

# Class: AnnotationHoverState

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).AnnotationHoverState

## Hierarchy

- [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<{ `annotationLayerState`: [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) ; `id`: `string` ; `partIndex`: `number`  } \| `undefined`\>

  ↳ **`AnnotationHoverState`**

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state.AnnotationHoverState.md#constructor)

### Properties

- [changed](annotation_annotation_layer_state.AnnotationHoverState.md#changed)
- [value\_](annotation_annotation_layer_state.AnnotationHoverState.md#value_)

### Accessors

- [value](annotation_annotation_layer_state.AnnotationHoverState.md#value)

## Constructors

### constructor

• **new AnnotationHoverState**(`value_`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_` | `undefined` \| { `annotationLayerState`: [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) ; `id`: `string` ; `partIndex`: `number`  } |

#### Inherited from

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[constructor](annotation_annotation_layer_state._internal_.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/trackable_value.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L43)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[changed](annotation_annotation_layer_state._internal_.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L42)

___

### value\_

• `Protected` **value\_**: `undefined` \| { `annotationLayerState`: [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) ; `id`: `string` ; `partIndex`: `number`  }

#### Inherited from

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[value_](annotation_annotation_layer_state._internal_.WatchableValue.md#value_)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L33)

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

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L36)
