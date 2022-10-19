[neuroglancer](../README.md) / [Modules](../modules.md) / [perspective\_view/panel](../modules/perspective_view_panel.md) / [<internal\>](../modules/perspective_view_panel._internal_.md) / DerivedProjectionParameters

# Class: DerivedProjectionParameters<Parameters\>

[perspective_view/panel](../modules/perspective_view_panel.md).[<internal>](../modules/perspective_view_panel._internal_.md).DerivedProjectionParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | extends [`ProjectionParameters`](annotation_base._internal_.ProjectionParameters.md) = [`ProjectionParameters`](annotation_base._internal_.ProjectionParameters.md) |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`DerivedProjectionParameters`**

## Implements

- [`WatchableValueChangeInterface`](../interfaces/perspective_view_panel._internal_.WatchableValueChangeInterface.md)<`Parameters`\>

## Table of contents

### Constructors

- [constructor](perspective_view_panel._internal_.DerivedProjectionParameters.md#constructor)

### Properties

- [changed](perspective_view_panel._internal_.DerivedProjectionParameters.md#changed)
- [disposedStacks](perspective_view_panel._internal_.DerivedProjectionParameters.md#disposedstacks)
- [oldValue\_](perspective_view_panel._internal_.DerivedProjectionParameters.md#oldvalue_)
- [refCount](perspective_view_panel._internal_.DerivedProjectionParameters.md#refcount)
- [renderViewport](perspective_view_panel._internal_.DerivedProjectionParameters.md#renderviewport)
- [update](perspective_view_panel._internal_.DerivedProjectionParameters.md#update)
- [value\_](perspective_view_panel._internal_.DerivedProjectionParameters.md#value_)
- [wasDisposed](perspective_view_panel._internal_.DerivedProjectionParameters.md#wasdisposed)

### Accessors

- [value](perspective_view_panel._internal_.DerivedProjectionParameters.md#value)

### Methods

- [addRef](perspective_view_panel._internal_.DerivedProjectionParameters.md#addref)
- [dispose](perspective_view_panel._internal_.DerivedProjectionParameters.md#dispose)
- [disposed](perspective_view_panel._internal_.DerivedProjectionParameters.md#disposed)
- [refCountReachedZero](perspective_view_panel._internal_.DerivedProjectionParameters.md#refcountreachedzero)
- [registerCancellable](perspective_view_panel._internal_.DerivedProjectionParameters.md#registercancellable)
- [registerDisposer](perspective_view_panel._internal_.DerivedProjectionParameters.md#registerdisposer)
- [registerEventListener](perspective_view_panel._internal_.DerivedProjectionParameters.md#registereventlistener)
- [setViewport](perspective_view_panel._internal_.DerivedProjectionParameters.md#setviewport)
- [unregisterDisposer](perspective_view_panel._internal_.DerivedProjectionParameters.md#unregisterdisposer)

## Constructors

### constructor

• **new DerivedProjectionParameters**<`Parameters`\>(`options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | extends [`ProjectionParameters`](annotation_base._internal_.ProjectionParameters.md)<`Parameters`\> = [`ProjectionParameters`](annotation_base._internal_.ProjectionParameters.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.navigationState` | [`NavigationState`](annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\> |
| `options.parametersConstructor?` | () => `Parameters` |
| `options.isEqual?` | (`a`: `Parameters`, `b`: `Parameters`) => `boolean` |
| `options.update` | (`out`: `Parameters`, `navigationState`: [`NavigationState`](annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\>) => `void` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/renderlayer.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L140)

## Properties

### changed

• **changed**: [`Signal`](util_signal.Signal.md)<(`oldValue`: `Parameters`, `newValue`: `Parameters`) => `void`\>

#### Implementation of

[WatchableValueChangeInterface](../interfaces/perspective_view_panel._internal_.WatchableValueChangeInterface.md).[changed](../interfaces/perspective_view_panel._internal_.WatchableValueChangeInterface.md#changed)

#### Defined in

[src/neuroglancer/renderlayer.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L139)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### oldValue\_

• `Private` **oldValue\_**: `Parameters`

#### Defined in

[src/neuroglancer/renderlayer.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L135)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### renderViewport

• `Private` **renderViewport**: [`RenderViewport`](annotation_annotation_layer_state._internal_.RenderViewport.md)

#### Defined in

[src/neuroglancer/renderlayer.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L137)

___

### update

• `Readonly` **update**: () => `void` & { `flush`: () => `void`  }

#### Defined in

[src/neuroglancer/renderlayer.ts:188](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L188)

___

### value\_

• `Private` **value\_**: `Parameters`

#### Defined in

[src/neuroglancer/renderlayer.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L136)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): `Parameters`

#### Returns

`Parameters`

#### Implementation of

[WatchableValueChangeInterface](../interfaces/perspective_view_panel._internal_.WatchableValueChangeInterface.md).[value](../interfaces/perspective_view_panel._internal_.WatchableValueChangeInterface.md#value)

#### Defined in

[src/neuroglancer/renderlayer.ts:183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L183)

## Methods

### addRef

▸ **addRef**(): [`DerivedProjectionParameters`](perspective_view_panel._internal_.DerivedProjectionParameters.md)<`Parameters`\>

#### Returns

[`DerivedProjectionParameters`](perspective_view_panel._internal_.DerivedProjectionParameters.md)<`Parameters`\>

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### setViewport

▸ **setViewport**(`viewport`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewport` | [`RenderViewport`](annotation_annotation_layer_state._internal_.RenderViewport.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/renderlayer.ts:177](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L177)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
