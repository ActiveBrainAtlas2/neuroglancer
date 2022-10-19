[neuroglancer](../README.md) / [Modules](../modules.md) / [renderlayer](../modules/renderlayer.md) / DerivedProjectionParameters

# Class: DerivedProjectionParameters<Parameters\>

[renderlayer](../modules/renderlayer.md).DerivedProjectionParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | extends [`ProjectionParameters`](projection_parameters.ProjectionParameters.md) = [`ProjectionParameters`](projection_parameters.ProjectionParameters.md) |

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`DerivedProjectionParameters`**

## Implements

- [`WatchableValueChangeInterface`](../interfaces/trackable_value.WatchableValueChangeInterface.md)<`Parameters`\>

## Table of contents

### Constructors

- [constructor](renderlayer.DerivedProjectionParameters.md#constructor)

### Properties

- [changed](renderlayer.DerivedProjectionParameters.md#changed)
- [disposedStacks](renderlayer.DerivedProjectionParameters.md#disposedstacks)
- [oldValue\_](renderlayer.DerivedProjectionParameters.md#oldvalue_)
- [refCount](renderlayer.DerivedProjectionParameters.md#refcount)
- [renderViewport](renderlayer.DerivedProjectionParameters.md#renderviewport)
- [update](renderlayer.DerivedProjectionParameters.md#update)
- [value\_](renderlayer.DerivedProjectionParameters.md#value_)
- [wasDisposed](renderlayer.DerivedProjectionParameters.md#wasdisposed)

### Accessors

- [value](renderlayer.DerivedProjectionParameters.md#value)

### Methods

- [addRef](renderlayer.DerivedProjectionParameters.md#addref)
- [dispose](renderlayer.DerivedProjectionParameters.md#dispose)
- [disposed](renderlayer.DerivedProjectionParameters.md#disposed)
- [refCountReachedZero](renderlayer.DerivedProjectionParameters.md#refcountreachedzero)
- [registerCancellable](renderlayer.DerivedProjectionParameters.md#registercancellable)
- [registerDisposer](renderlayer.DerivedProjectionParameters.md#registerdisposer)
- [registerEventListener](renderlayer.DerivedProjectionParameters.md#registereventlistener)
- [setViewport](renderlayer.DerivedProjectionParameters.md#setviewport)
- [unregisterDisposer](renderlayer.DerivedProjectionParameters.md#unregisterdisposer)

## Constructors

### constructor

• **new DerivedProjectionParameters**<`Parameters`\>(`options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | extends [`ProjectionParameters`](projection_parameters.ProjectionParameters.md)<`Parameters`\> = [`ProjectionParameters`](projection_parameters.ProjectionParameters.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.navigationState` | [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\> |
| `options.parametersConstructor?` | () => `Parameters` |
| `options.isEqual?` | (`a`: `Parameters`, `b`: `Parameters`) => `boolean` |
| `options.update` | (`out`: `Parameters`, `navigationState`: [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>) => `void` |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/renderlayer.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L140)

## Properties

### changed

• **changed**: [`Signal`](coordinate_transform._internal_.Signal.md)<(`oldValue`: `Parameters`, `newValue`: `Parameters`) => `void`\>

#### Implementation of

[WatchableValueChangeInterface](../interfaces/trackable_value.WatchableValueChangeInterface.md).[changed](../interfaces/trackable_value.WatchableValueChangeInterface.md#changed)

#### Defined in

[src/neuroglancer/renderlayer.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L139)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### oldValue\_

• `Private` **oldValue\_**: `Parameters`

#### Defined in

[src/neuroglancer/renderlayer.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L135)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### renderViewport

• `Private` **renderViewport**: [`RenderViewport`](display_context.RenderViewport.md)

#### Defined in

[src/neuroglancer/renderlayer.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L137)

___

### update

• `Readonly` **update**: () => `void` & { `flush`: () => `void`  }

#### Defined in

[src/neuroglancer/renderlayer.ts:188](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L188)

___

### value\_

• `Private` **value\_**: `Parameters`

#### Defined in

[src/neuroglancer/renderlayer.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L136)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): `Parameters`

#### Returns

`Parameters`

#### Implementation of

[WatchableValueChangeInterface](../interfaces/trackable_value.WatchableValueChangeInterface.md).[value](../interfaces/trackable_value.WatchableValueChangeInterface.md#value)

#### Defined in

[src/neuroglancer/renderlayer.ts:183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L183)

## Methods

### addRef

▸ **addRef**(): [`DerivedProjectionParameters`](renderlayer.DerivedProjectionParameters.md)<`Parameters`\>

#### Returns

[`DerivedProjectionParameters`](renderlayer.DerivedProjectionParameters.md)<`Parameters`\>

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

### setViewport

▸ **setViewport**(`viewport`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewport` | [`RenderViewport`](display_context.RenderViewport.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/renderlayer.ts:177](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L177)

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
