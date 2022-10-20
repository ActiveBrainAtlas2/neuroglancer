[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/python\_integration/prefetch](../modules/neuroglancer_python_integration_prefetch.md) / PrefetchManager

# Class: PrefetchManager

[neuroglancer/python_integration/prefetch](../modules/neuroglancer_python_integration_prefetch.md).PrefetchManager

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`PrefetchManager`**

## Table of contents

### Constructors

- [constructor](neuroglancer_python_integration_prefetch.PrefetchManager.md#constructor)

### Properties

- [changed](neuroglancer_python_integration_prefetch.PrefetchManager.md#changed)
- [dataContext](neuroglancer_python_integration_prefetch.PrefetchManager.md#datacontext)
- [dataSourceProvider](neuroglancer_python_integration_prefetch.PrefetchManager.md#datasourceprovider)
- [display](neuroglancer_python_integration_prefetch.PrefetchManager.md#display)
- [disposedStacks](neuroglancer_python_integration_prefetch.PrefetchManager.md#disposedstacks)
- [prefetchStates](neuroglancer_python_integration_prefetch.PrefetchManager.md#prefetchstates)
- [refCount](neuroglancer_python_integration_prefetch.PrefetchManager.md#refcount)
- [specification](neuroglancer_python_integration_prefetch.PrefetchManager.md#specification)
- [uiConfiguration](neuroglancer_python_integration_prefetch.PrefetchManager.md#uiconfiguration)
- [updatePrefetchStates](neuroglancer_python_integration_prefetch.PrefetchManager.md#updateprefetchstates)
- [wasDisposed](neuroglancer_python_integration_prefetch.PrefetchManager.md#wasdisposed)

### Methods

- [addRef](neuroglancer_python_integration_prefetch.PrefetchManager.md#addref)
- [dispose](neuroglancer_python_integration_prefetch.PrefetchManager.md#dispose)
- [disposed](neuroglancer_python_integration_prefetch.PrefetchManager.md#disposed)
- [makePrefetchState](neuroglancer_python_integration_prefetch.PrefetchManager.md#makeprefetchstate)
- [refCountReachedZero](neuroglancer_python_integration_prefetch.PrefetchManager.md#refcountreachedzero)
- [registerCancellable](neuroglancer_python_integration_prefetch.PrefetchManager.md#registercancellable)
- [registerDisposer](neuroglancer_python_integration_prefetch.PrefetchManager.md#registerdisposer)
- [registerEventListener](neuroglancer_python_integration_prefetch.PrefetchManager.md#registereventlistener)
- [reset](neuroglancer_python_integration_prefetch.PrefetchManager.md#reset)
- [restoreState](neuroglancer_python_integration_prefetch.PrefetchManager.md#restorestate)
- [toJSON](neuroglancer_python_integration_prefetch.PrefetchManager.md#tojson)
- [unregisterDisposer](neuroglancer_python_integration_prefetch.PrefetchManager.md#unregisterdisposer)

## Constructors

### constructor

• **new PrefetchManager**(`display`, `dataSourceProvider`, `dataContext`, `uiConfiguration`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `display` | [`DisplayContext`](neuroglancer_display_context.DisplayContext.md) |
| `dataSourceProvider` | [`DataSourceProviderRegistry`](neuroglancer_datasource.DataSourceProviderRegistry.md) |
| `dataContext` | [`DataManagementContext`](neuroglancer_viewer.DataManagementContext.md) |
| `uiConfiguration` | [`ViewerUIConfiguration`](../modules/neuroglancer_viewer.md#vieweruiconfiguration) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/prefetch.ts#L37)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/prefetch.ts#L33)

___

### dataContext

• **dataContext**: [`DataManagementContext`](neuroglancer_viewer.DataManagementContext.md)

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/prefetch.ts#L39)

___

### dataSourceProvider

• **dataSourceProvider**: [`DataSourceProviderRegistry`](neuroglancer_datasource.DataSourceProviderRegistry.md)

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/prefetch.ts#L38)

___

### display

• **display**: [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/prefetch.ts#L38)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### prefetchStates

• **prefetchStates**: `Map`<`string`, [`Viewer`](neuroglancer_viewer.Viewer.md)\>

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/prefetch.ts#L32)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### specification

• `Private` **specification**: { `priority`: `number` ; `state`: `any`  }[] = `[]`

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/prefetch.ts#L35)

___

### uiConfiguration

• **uiConfiguration**: [`ViewerUIConfiguration`](../modules/neuroglancer_viewer.md#vieweruiconfiguration)

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/prefetch.ts#L40)

___

### updatePrefetchStates

• `Private` **updatePrefetchStates**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/prefetch.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`PrefetchManager`](neuroglancer_python_integration_prefetch.PrefetchManager.md)

#### Returns

[`PrefetchManager`](neuroglancer_python_integration_prefetch.PrefetchManager.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### makePrefetchState

▸ `Private` **makePrefetchState**(`state`, `priority`): [`Viewer`](neuroglancer_viewer.Viewer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |
| `priority` | `number` |

#### Returns

[`Viewer`](neuroglancer_viewer.Viewer.md)

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/prefetch.ts#L67)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/prefetch.ts#L84)

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

[src/neuroglancer/python_integration/prefetch.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/prefetch.ts#L90)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `priority`: `number` ; `state`: `any`  }[]

#### Returns

`undefined` \| { `priority`: `number` ; `state`: `any`  }[]

#### Defined in

[src/neuroglancer/python_integration/prefetch.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/prefetch.ts#L101)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
