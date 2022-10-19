[neuroglancer](../README.md) / [Modules](../modules.md) / [python\_integration/prefetch](../modules/python_integration_prefetch.md) / PrefetchManager

# Class: PrefetchManager

[python_integration/prefetch](../modules/python_integration_prefetch.md).PrefetchManager

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`PrefetchManager`**

## Table of contents

### Constructors

- [constructor](python_integration_prefetch.PrefetchManager.md#constructor)

### Properties

- [changed](python_integration_prefetch.PrefetchManager.md#changed)
- [dataContext](python_integration_prefetch.PrefetchManager.md#datacontext)
- [dataSourceProvider](python_integration_prefetch.PrefetchManager.md#datasourceprovider)
- [display](python_integration_prefetch.PrefetchManager.md#display)
- [disposedStacks](python_integration_prefetch.PrefetchManager.md#disposedstacks)
- [prefetchStates](python_integration_prefetch.PrefetchManager.md#prefetchstates)
- [refCount](python_integration_prefetch.PrefetchManager.md#refcount)
- [specification](python_integration_prefetch.PrefetchManager.md#specification)
- [uiConfiguration](python_integration_prefetch.PrefetchManager.md#uiconfiguration)
- [updatePrefetchStates](python_integration_prefetch.PrefetchManager.md#updateprefetchstates)
- [wasDisposed](python_integration_prefetch.PrefetchManager.md#wasdisposed)

### Methods

- [addRef](python_integration_prefetch.PrefetchManager.md#addref)
- [dispose](python_integration_prefetch.PrefetchManager.md#dispose)
- [disposed](python_integration_prefetch.PrefetchManager.md#disposed)
- [makePrefetchState](python_integration_prefetch.PrefetchManager.md#makeprefetchstate)
- [refCountReachedZero](python_integration_prefetch.PrefetchManager.md#refcountreachedzero)
- [registerCancellable](python_integration_prefetch.PrefetchManager.md#registercancellable)
- [registerDisposer](python_integration_prefetch.PrefetchManager.md#registerdisposer)
- [registerEventListener](python_integration_prefetch.PrefetchManager.md#registereventlistener)
- [reset](python_integration_prefetch.PrefetchManager.md#reset)
- [restoreState](python_integration_prefetch.PrefetchManager.md#restorestate)
- [toJSON](python_integration_prefetch.PrefetchManager.md#tojson)
- [unregisterDisposer](python_integration_prefetch.PrefetchManager.md#unregisterdisposer)

## Constructors

### constructor

• **new PrefetchManager**(`display`, `dataSourceProvider`, `dataContext`, `uiConfiguration`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `display` | [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md) |
| `dataSourceProvider` | [`DataSourceProviderRegistry`](datasource.DataSourceProviderRegistry.md) |
| `dataContext` | [`DataManagementContext`](datasource_state_share._internal_.DataManagementContext.md) |
| `uiConfiguration` | [`ViewerUIConfiguration`](../modules/datasource_state_share._internal_.md#vieweruiconfiguration) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/prefetch.ts#L37)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/prefetch.ts#L33)

___

### dataContext

• **dataContext**: [`DataManagementContext`](datasource_state_share._internal_.DataManagementContext.md)

___

### dataSourceProvider

• **dataSourceProvider**: [`DataSourceProviderRegistry`](datasource.DataSourceProviderRegistry.md)

___

### display

• **display**: [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### prefetchStates

• **prefetchStates**: `Map`<`string`, [`Viewer`](datasource_state_share._internal_.Viewer.md)\>

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/prefetch.ts#L32)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### specification

• `Private` **specification**: { `priority`: `number` ; `state`: `any`  }[] = `[]`

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/prefetch.ts#L35)

___

### uiConfiguration

• **uiConfiguration**: [`ViewerUIConfiguration`](../modules/datasource_state_share._internal_.md#vieweruiconfiguration)

___

### updatePrefetchStates

• `Private` **updatePrefetchStates**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/prefetch.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`PrefetchManager`](python_integration_prefetch.PrefetchManager.md)

#### Returns

[`PrefetchManager`](python_integration_prefetch.PrefetchManager.md)

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

### makePrefetchState

▸ `Private` **makePrefetchState**(`state`, `priority`): [`Viewer`](datasource_state_share._internal_.Viewer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |
| `priority` | `number` |

#### Returns

[`Viewer`](datasource_state_share._internal_.Viewer.md)

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/prefetch.ts#L67)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/prefetch.ts#L84)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/prefetch.ts#L90)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `priority`: `number` ; `state`: `any`  }[]

#### Returns

`undefined` \| { `priority`: `number` ; `state`: `any`  }[]

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/prefetch.ts#L101)

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
