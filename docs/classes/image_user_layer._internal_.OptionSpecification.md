[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / OptionSpecification

# Class: OptionSpecification<T\>

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).OptionSpecification

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`OptionSpecification`**

  ↳↳ [`TabSpecification`](image_user_layer._internal_.TabSpecification.md)

## Implements

- [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.OptionSpecification.md#constructor)

### Properties

- [changed](image_user_layer._internal_.OptionSpecification.md#changed)
- [defaultValue](image_user_layer._internal_.OptionSpecification.md#defaultvalue)
- [disposedStacks](image_user_layer._internal_.OptionSpecification.md#disposedstacks)
- [options](image_user_layer._internal_.OptionSpecification.md#options)
- [optionsChanged](image_user_layer._internal_.OptionSpecification.md#optionschanged)
- [ready\_](image_user_layer._internal_.OptionSpecification.md#ready_)
- [refCount](image_user_layer._internal_.OptionSpecification.md#refcount)
- [selectedValue](image_user_layer._internal_.OptionSpecification.md#selectedvalue)
- [wasDisposed](image_user_layer._internal_.OptionSpecification.md#wasdisposed)

### Accessors

- [default](image_user_layer._internal_.OptionSpecification.md#default)
- [ready](image_user_layer._internal_.OptionSpecification.md#ready)
- [validValue](image_user_layer._internal_.OptionSpecification.md#validvalue)
- [value](image_user_layer._internal_.OptionSpecification.md#value)

### Methods

- [add](image_user_layer._internal_.OptionSpecification.md#add)
- [addRef](image_user_layer._internal_.OptionSpecification.md#addref)
- [dispose](image_user_layer._internal_.OptionSpecification.md#dispose)
- [disposed](image_user_layer._internal_.OptionSpecification.md#disposed)
- [refCountReachedZero](image_user_layer._internal_.OptionSpecification.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.OptionSpecification.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.OptionSpecification.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.OptionSpecification.md#registereventlistener)
- [reset](image_user_layer._internal_.OptionSpecification.md#reset)
- [restoreState](image_user_layer._internal_.OptionSpecification.md#restorestate)
- [toJSON](image_user_layer._internal_.OptionSpecification.md#tojson)
- [unregisterDisposer](image_user_layer._internal_.OptionSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new OptionSpecification**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[changed](../interfaces/coordinate_transform._internal_.Trackable.md#changed)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L52)

___

### defaultValue

• `Private` **defaultValue**: `undefined` \| `string` = `undefined`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L57)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### options

• **options**: `Map`<`string`, `T`\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L53)

___

### optionsChanged

• **optionsChanged**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L54)

___

### ready\_

• **ready\_**: `boolean` = `true`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L121)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### selectedValue

• `Private` **selectedValue**: `undefined` \| `string` = `undefined`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L56)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### default

• `get` **default**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L74)

• `set` **default**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L67)

___

### ready

• `get` **ready**(): `boolean`

When `ready` is `false`, the selected `value` may be set to an unknown option.

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L126)

• `set` **ready**(`value`): `void`

When `ready` is `false`, the selected `value` may be set to an unknown option.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L130)

___

### validValue

• `get` **validValue**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L89)

___

### value

• `get` **value**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L59)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L78)

## Methods

### add

▸ **add**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L97)

___

### addRef

▸ **addRef**(): [`OptionSpecification`](image_user_layer._internal_.OptionSpecification.md)<`T`\>

#### Returns

[`OptionSpecification`](image_user_layer._internal_.OptionSpecification.md)<`T`\>

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

___

### registerCancellable

▸ **registerCancellable**<`T`\>(`cancellable`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancellable` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[reset](../interfaces/coordinate_transform._internal_.Trackable.md#reset)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L117)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[restoreState](../interfaces/coordinate_transform._internal_.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L140)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[toJSON](../interfaces/coordinate_transform._internal_.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L109)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
