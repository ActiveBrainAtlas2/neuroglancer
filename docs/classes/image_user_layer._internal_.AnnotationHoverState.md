[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / AnnotationHoverState

# Class: AnnotationHoverState

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).AnnotationHoverState

## Hierarchy

- [`WatchableValue`](trackable_value.WatchableValue.md)<{ `annotationLayerState`: [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md) ; `id`: `string` ; `partIndex`: `number`  } \| `undefined`\>

  ↳ **`AnnotationHoverState`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.AnnotationHoverState.md#constructor)

### Properties

- [changed](image_user_layer._internal_.AnnotationHoverState.md#changed)
- [value\_](image_user_layer._internal_.AnnotationHoverState.md#value_)

### Accessors

- [value](image_user_layer._internal_.AnnotationHoverState.md#value)

## Constructors

### constructor

• **new AnnotationHoverState**(`value_`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_` | `undefined` \| { `annotationLayerState`: [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md) ; `id`: `string` ; `partIndex`: `number`  } |

#### Inherited from

[WatchableValue](trackable_value.WatchableValue.md).[constructor](trackable_value.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/trackable_value.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L43)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Inherited from

[WatchableValue](trackable_value.WatchableValue.md).[changed](trackable_value.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L42)

___

### value\_

• `Protected` **value\_**: `undefined` \| { `annotationLayerState`: [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md) ; `id`: `string` ; `partIndex`: `number`  }

#### Inherited from

[WatchableValue](trackable_value.WatchableValue.md).[value_](trackable_value.WatchableValue.md#value_)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L33)

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

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L36)
