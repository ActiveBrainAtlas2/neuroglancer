[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / CrossSectionSpecification

# Class: CrossSectionSpecification

[data_panel_layout](../modules/data_panel_layout.md).CrossSectionSpecification

## Hierarchy

- `RefCounted`

  ↳ **`CrossSectionSpecification`**

## Implements

- `Trackable`

## Table of contents

### Constructors

- [constructor](data_panel_layout.CrossSectionSpecification.md#constructor)

### Properties

- [changed](data_panel_layout.CrossSectionSpecification.md#changed)
- [disposedStacks](data_panel_layout.CrossSectionSpecification.md#disposedstacks)
- [height](data_panel_layout.CrossSectionSpecification.md#height)
- [navigationState](data_panel_layout.CrossSectionSpecification.md#navigationstate)
- [orientation](data_panel_layout.CrossSectionSpecification.md#orientation)
- [position](data_panel_layout.CrossSectionSpecification.md#position)
- [refCount](data_panel_layout.CrossSectionSpecification.md#refcount)
- [scale](data_panel_layout.CrossSectionSpecification.md#scale)
- [wasDisposed](data_panel_layout.CrossSectionSpecification.md#wasdisposed)
- [width](data_panel_layout.CrossSectionSpecification.md#width)

### Methods

- [addRef](data_panel_layout.CrossSectionSpecification.md#addref)
- [dispose](data_panel_layout.CrossSectionSpecification.md#dispose)
- [disposed](data_panel_layout.CrossSectionSpecification.md#disposed)
- [refCountReachedZero](data_panel_layout.CrossSectionSpecification.md#refcountreachedzero)
- [registerCancellable](data_panel_layout.CrossSectionSpecification.md#registercancellable)
- [registerDisposer](data_panel_layout.CrossSectionSpecification.md#registerdisposer)
- [registerEventListener](data_panel_layout.CrossSectionSpecification.md#registereventlistener)
- [reset](data_panel_layout.CrossSectionSpecification.md#reset)
- [restoreState](data_panel_layout.CrossSectionSpecification.md#restorestate)
- [toJSON](data_panel_layout.CrossSectionSpecification.md#tojson)
- [unregisterDisposer](data_panel_layout.CrossSectionSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new CrossSectionSpecification**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\> |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/data_panel_layout.ts:476](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/data_panel_layout.ts#L476)

## Properties

### changed

• **changed**: `NullarySignal`

#### Implementation of

Trackable.changed

#### Defined in

[src/neuroglancer/data_panel_layout.ts:475](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/data_panel_layout.ts#L475)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L52)

___

### height

• **height**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:470](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/data_panel_layout.ts#L470)

___

### navigationState

• **navigationState**: [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:474](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/data_panel_layout.ts#L474)

___

### orientation

• **orientation**: [`LinkedOrientationState`](navigation_state.LinkedOrientationState.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:472](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/data_panel_layout.ts#L472)

___

### position

• **position**: [`LinkedPosition`](navigation_state.LinkedPosition.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:471](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/data_panel_layout.ts#L471)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L45)

___

### scale

• **scale**: [`LinkedZoomState`](navigation_state.LinkedZoomState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:473](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/data_panel_layout.ts#L473)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/data_panel_layout.ts#L469)

## Methods

### addRef

▸ **addRef**(): [`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)

#### Returns

[`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L66)

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

RefCounted.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/data_panel_layout.ts:504](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/data_panel_layout.ts#L504)

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

Trackable.restoreState

#### Defined in

[src/neuroglancer/data_panel_layout.ts:494](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/data_panel_layout.ts#L494)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `height` | `any` |
| `orientation` | `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  } |
| `position` | `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  } |
| `scale` | `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  } |
| `width` | `any` |

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/data_panel_layout.ts:512](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/data_panel_layout.ts#L512)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L85)
