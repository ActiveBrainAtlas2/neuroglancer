[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / TabSpecification

# Class: TabSpecification

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).TabSpecification

## Hierarchy

- [`OptionSpecification`](image_user_layer._internal_.OptionSpecification.md)<{ `label`: `string` ; `order?`: `number` ; `getter`: () => [`Tab`](image_user_layer._internal_.Tab.md)  }\>

  ↳ **`TabSpecification`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.TabSpecification.md#constructor)

### Properties

- [changed](image_user_layer._internal_.TabSpecification.md#changed)
- [disposedStacks](image_user_layer._internal_.TabSpecification.md#disposedstacks)
- [options](image_user_layer._internal_.TabSpecification.md#options)
- [optionsChanged](image_user_layer._internal_.TabSpecification.md#optionschanged)
- [ready\_](image_user_layer._internal_.TabSpecification.md#ready_)
- [refCount](image_user_layer._internal_.TabSpecification.md#refcount)
- [wasDisposed](image_user_layer._internal_.TabSpecification.md#wasdisposed)

### Accessors

- [default](image_user_layer._internal_.TabSpecification.md#default)
- [ready](image_user_layer._internal_.TabSpecification.md#ready)
- [validValue](image_user_layer._internal_.TabSpecification.md#validvalue)
- [value](image_user_layer._internal_.TabSpecification.md#value)

### Methods

- [add](image_user_layer._internal_.TabSpecification.md#add)
- [addRef](image_user_layer._internal_.TabSpecification.md#addref)
- [dispose](image_user_layer._internal_.TabSpecification.md#dispose)
- [disposed](image_user_layer._internal_.TabSpecification.md#disposed)
- [refCountReachedZero](image_user_layer._internal_.TabSpecification.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.TabSpecification.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.TabSpecification.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.TabSpecification.md#registereventlistener)
- [reset](image_user_layer._internal_.TabSpecification.md#reset)
- [restoreState](image_user_layer._internal_.TabSpecification.md#restorestate)
- [toJSON](image_user_layer._internal_.TabSpecification.md#tojson)
- [unregisterDisposer](image_user_layer._internal_.TabSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new TabSpecification**()

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[constructor](image_user_layer._internal_.OptionSpecification.md#constructor)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[changed](image_user_layer._internal_.OptionSpecification.md#changed)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L52)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[disposedStacks](image_user_layer._internal_.OptionSpecification.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### options

• **options**: `Map`<`string`, { `label`: `string` ; `order?`: `number` ; `getter`: () => [`Tab`](image_user_layer._internal_.Tab.md)  }\>

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[options](image_user_layer._internal_.OptionSpecification.md#options)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L53)

___

### optionsChanged

• **optionsChanged**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[optionsChanged](image_user_layer._internal_.OptionSpecification.md#optionschanged)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L54)

___

### ready\_

• **ready\_**: `boolean` = `true`

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[ready_](image_user_layer._internal_.OptionSpecification.md#ready_)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L121)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[refCount](image_user_layer._internal_.OptionSpecification.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[wasDisposed](image_user_layer._internal_.OptionSpecification.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### default

• `get` **default**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

OptionSpecification.default

#### Defined in

[src/neuroglancer/widget/tab_view.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L74)

• `set` **default**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Inherited from

OptionSpecification.default

#### Defined in

[src/neuroglancer/widget/tab_view.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L67)

___

### ready

• `get` **ready**(): `boolean`

When `ready` is `false`, the selected `value` may be set to an unknown option.

#### Returns

`boolean`

#### Inherited from

OptionSpecification.ready

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

#### Inherited from

OptionSpecification.ready

#### Defined in

[src/neuroglancer/widget/tab_view.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L130)

___

### validValue

• `get` **validValue**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

OptionSpecification.validValue

#### Defined in

[src/neuroglancer/widget/tab_view.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L89)

___

### value

• `get` **value**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

OptionSpecification.value

#### Defined in

[src/neuroglancer/widget/tab_view.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L59)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Inherited from

OptionSpecification.value

#### Defined in

[src/neuroglancer/widget/tab_view.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L78)

## Methods

### add

▸ **add**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `Object` |
| `value.label` | `string` |
| `value.order?` | `number` |
| `value.getter` | () => [`Tab`](image_user_layer._internal_.Tab.md) |

#### Returns

`void`

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[add](image_user_layer._internal_.OptionSpecification.md#add)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L97)

___

### addRef

▸ **addRef**(): [`TabSpecification`](image_user_layer._internal_.TabSpecification.md)

#### Returns

[`TabSpecification`](image_user_layer._internal_.TabSpecification.md)

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[addRef](image_user_layer._internal_.OptionSpecification.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[dispose](image_user_layer._internal_.OptionSpecification.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[disposed](image_user_layer._internal_.OptionSpecification.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[refCountReachedZero](image_user_layer._internal_.OptionSpecification.md#refcountreachedzero)

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

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[registerCancellable](image_user_layer._internal_.OptionSpecification.md#registercancellable)

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

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[registerDisposer](image_user_layer._internal_.OptionSpecification.md#registerdisposer)

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

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[registerEventListener](image_user_layer._internal_.OptionSpecification.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[reset](image_user_layer._internal_.OptionSpecification.md#reset)

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

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[restoreState](image_user_layer._internal_.OptionSpecification.md#restorestate)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/tab_view.ts#L140)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[toJSON](image_user_layer._internal_.OptionSpecification.md#tojson)

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

[OptionSpecification](image_user_layer._internal_.OptionSpecification.md).[unregisterDisposer](image_user_layer._internal_.OptionSpecification.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
