[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/renderlayer](../modules/neuroglancer_renderlayer.md) / DerivedProjectionParameters

# Class: DerivedProjectionParameters<Parameters\>

[neuroglancer/renderlayer](../modules/neuroglancer_renderlayer.md).DerivedProjectionParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | extends [`ProjectionParameters`](neuroglancer_projection_parameters.ProjectionParameters.md) = [`ProjectionParameters`](neuroglancer_projection_parameters.ProjectionParameters.md) |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`DerivedProjectionParameters`**

## Implements

- [`WatchableValueChangeInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueChangeInterface.md)<`Parameters`\>

## Table of contents

### Constructors

- [constructor](neuroglancer_renderlayer.DerivedProjectionParameters.md#constructor)

### Properties

- [changed](neuroglancer_renderlayer.DerivedProjectionParameters.md#changed)
- [disposedStacks](neuroglancer_renderlayer.DerivedProjectionParameters.md#disposedstacks)
- [oldValue\_](neuroglancer_renderlayer.DerivedProjectionParameters.md#oldvalue_)
- [refCount](neuroglancer_renderlayer.DerivedProjectionParameters.md#refcount)
- [renderViewport](neuroglancer_renderlayer.DerivedProjectionParameters.md#renderviewport)
- [update](neuroglancer_renderlayer.DerivedProjectionParameters.md#update)
- [value\_](neuroglancer_renderlayer.DerivedProjectionParameters.md#value_)
- [wasDisposed](neuroglancer_renderlayer.DerivedProjectionParameters.md#wasdisposed)

### Accessors

- [value](neuroglancer_renderlayer.DerivedProjectionParameters.md#value)

### Methods

- [addRef](neuroglancer_renderlayer.DerivedProjectionParameters.md#addref)
- [dispose](neuroglancer_renderlayer.DerivedProjectionParameters.md#dispose)
- [disposed](neuroglancer_renderlayer.DerivedProjectionParameters.md#disposed)
- [refCountReachedZero](neuroglancer_renderlayer.DerivedProjectionParameters.md#refcountreachedzero)
- [registerCancellable](neuroglancer_renderlayer.DerivedProjectionParameters.md#registercancellable)
- [registerDisposer](neuroglancer_renderlayer.DerivedProjectionParameters.md#registerdisposer)
- [registerEventListener](neuroglancer_renderlayer.DerivedProjectionParameters.md#registereventlistener)
- [setViewport](neuroglancer_renderlayer.DerivedProjectionParameters.md#setviewport)
- [unregisterDisposer](neuroglancer_renderlayer.DerivedProjectionParameters.md#unregisterdisposer)

## Constructors

### constructor

• **new DerivedProjectionParameters**<`Parameters`\>(`options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | extends [`ProjectionParameters`](neuroglancer_projection_parameters.ProjectionParameters.md)<`Parameters`\> = [`ProjectionParameters`](neuroglancer_projection_parameters.ProjectionParameters.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.navigationState` | [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\> |
| `options.parametersConstructor?` | () => `Parameters` |
| `options.isEqual?` | (`a`: `Parameters`, `b`: `Parameters`) => `boolean` |
| `options.update` | (`out`: `Parameters`, `navigationState`: [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>) => `void` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/renderlayer.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L140)

## Properties

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`oldValue`: `Parameters`, `newValue`: `Parameters`) => `void`\>

#### Implementation of

[WatchableValueChangeInterface](../interfaces/neuroglancer_trackable_value.WatchableValueChangeInterface.md).[changed](../interfaces/neuroglancer_trackable_value.WatchableValueChangeInterface.md#changed)

#### Defined in

[src/neuroglancer/renderlayer.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L139)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### oldValue\_

• `Private` **oldValue\_**: `Parameters`

#### Defined in

[src/neuroglancer/renderlayer.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L135)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### renderViewport

• `Private` **renderViewport**: [`RenderViewport`](neuroglancer_display_context.RenderViewport.md)

#### Defined in

[src/neuroglancer/renderlayer.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L137)

___

### update

• `Readonly` **update**: () => `void` & { `flush`: () => `void`  }

#### Defined in

[src/neuroglancer/renderlayer.ts:188](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L188)

___

### value\_

• `Private` **value\_**: `Parameters`

#### Defined in

[src/neuroglancer/renderlayer.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L136)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): `Parameters`

#### Returns

`Parameters`

#### Implementation of

[WatchableValueChangeInterface](../interfaces/neuroglancer_trackable_value.WatchableValueChangeInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueChangeInterface.md#value)

#### Defined in

[src/neuroglancer/renderlayer.ts:183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L183)

## Methods

### addRef

▸ **addRef**(): [`DerivedProjectionParameters`](neuroglancer_renderlayer.DerivedProjectionParameters.md)<`Parameters`\>

#### Returns

[`DerivedProjectionParameters`](neuroglancer_renderlayer.DerivedProjectionParameters.md)<`Parameters`\>

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### setViewport

▸ **setViewport**(`viewport`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewport` | [`RenderViewport`](neuroglancer_display_context.RenderViewport.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/renderlayer.ts:177](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L177)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
