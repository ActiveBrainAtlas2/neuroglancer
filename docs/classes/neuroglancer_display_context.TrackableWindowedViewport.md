[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/display\_context](../modules/neuroglancer_display_context.md) / TrackableWindowedViewport

# Class: TrackableWindowedViewport

[neuroglancer/display_context](../modules/neuroglancer_display_context.md).TrackableWindowedViewport

## Hierarchy

- [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`Float64Array`\>

  ↳ **`TrackableWindowedViewport`**

## Table of contents

### Constructors

- [constructor](neuroglancer_display_context.TrackableWindowedViewport.md#constructor)

### Properties

- [changed](neuroglancer_display_context.TrackableWindowedViewport.md#changed)
- [defaultValue](neuroglancer_display_context.TrackableWindowedViewport.md#defaultvalue)
- [validator](neuroglancer_display_context.TrackableWindowedViewport.md#validator)
- [value\_](neuroglancer_display_context.TrackableWindowedViewport.md#value_)

### Accessors

- [value](neuroglancer_display_context.TrackableWindowedViewport.md#value)

### Methods

- [reset](neuroglancer_display_context.TrackableWindowedViewport.md#reset)
- [restoreState](neuroglancer_display_context.TrackableWindowedViewport.md#restorestate)
- [toJSON](neuroglancer_display_context.TrackableWindowedViewport.md#tojson)

## Constructors

### constructor

• **new TrackableWindowedViewport**()

#### Overrides

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[constructor](neuroglancer_trackable_value.TrackableValue.md#constructor)

#### Defined in

[src/neuroglancer/display_context.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L276)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[changed](neuroglancer_trackable_value.TrackableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L42)

___

### defaultValue

• **defaultValue**: `Float64Array` = `value`

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[defaultValue](neuroglancer_trackable_value.TrackableValue.md#defaultvalue)

#### Defined in

[src/neuroglancer/trackable_value.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L47)

___

### validator

• **validator**: (`value`: `any`) => `Float64Array`

#### Type declaration

▸ (`value`): `Float64Array`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`Float64Array`

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[validator](neuroglancer_trackable_value.TrackableValue.md#validator)

#### Defined in

[src/neuroglancer/trackable_value.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L47)

___

### value\_

• `Protected` **value\_**: `Float64Array`

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[value_](neuroglancer_trackable_value.TrackableValue.md#value_)

#### Defined in

[src/neuroglancer/trackable_value.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L43)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

TrackableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L33)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `T` |

#### Returns

`void`

#### Inherited from

TrackableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L36)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[reset](neuroglancer_trackable_value.TrackableValue.md#reset)

#### Defined in

[src/neuroglancer/trackable_value.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L57)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[restoreState](neuroglancer_trackable_value.TrackableValue.md#restorestate)

#### Defined in

[src/neuroglancer/trackable_value.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L60)

___

### toJSON

▸ **toJSON**(): `undefined` \| `number`[]

#### Returns

`undefined` \| `number`[]

#### Overrides

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[toJSON](neuroglancer_trackable_value.TrackableValue.md#tojson)

#### Defined in

[src/neuroglancer/display_context.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L281)
