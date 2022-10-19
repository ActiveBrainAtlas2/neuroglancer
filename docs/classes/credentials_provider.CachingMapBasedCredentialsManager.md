[neuroglancer](../README.md) / [Modules](../modules.md) / [credentials\_provider](../modules/credentials_provider.md) / CachingMapBasedCredentialsManager

# Class: CachingMapBasedCredentialsManager

[credentials_provider](../modules/credentials_provider.md).CachingMapBasedCredentialsManager

## Hierarchy

- [`CachingCredentialsManager`](credentials_provider.CachingCredentialsManager.md)<[`MapBasedCredentialsManager`](credentials_provider.MapBasedCredentialsManager.md)\>

  ↳ **`CachingMapBasedCredentialsManager`**

## Table of contents

### Constructors

- [constructor](credentials_provider.CachingMapBasedCredentialsManager.md#constructor)

### Properties

- [base](credentials_provider.CachingMapBasedCredentialsManager.md#base)
- [disposedStacks](credentials_provider.CachingMapBasedCredentialsManager.md#disposedstacks)
- [memoize](credentials_provider.CachingMapBasedCredentialsManager.md#memoize)
- [refCount](credentials_provider.CachingMapBasedCredentialsManager.md#refcount)
- [wasDisposed](credentials_provider.CachingMapBasedCredentialsManager.md#wasdisposed)

### Methods

- [addRef](credentials_provider.CachingMapBasedCredentialsManager.md#addref)
- [dispose](credentials_provider.CachingMapBasedCredentialsManager.md#dispose)
- [disposed](credentials_provider.CachingMapBasedCredentialsManager.md#disposed)
- [getCredentialsProvider](credentials_provider.CachingMapBasedCredentialsManager.md#getcredentialsprovider)
- [refCountReachedZero](credentials_provider.CachingMapBasedCredentialsManager.md#refcountreachedzero)
- [register](credentials_provider.CachingMapBasedCredentialsManager.md#register)
- [registerCancellable](credentials_provider.CachingMapBasedCredentialsManager.md#registercancellable)
- [registerDisposer](credentials_provider.CachingMapBasedCredentialsManager.md#registerdisposer)
- [registerEventListener](credentials_provider.CachingMapBasedCredentialsManager.md#registereventlistener)
- [unregisterDisposer](credentials_provider.CachingMapBasedCredentialsManager.md#unregisterdisposer)

## Constructors

### constructor

• **new CachingMapBasedCredentialsManager**()

#### Overrides

[CachingCredentialsManager](credentials_provider.CachingCredentialsManager.md).[constructor](credentials_provider.CachingCredentialsManager.md#constructor)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L150)

## Properties

### base

• **base**: [`MapBasedCredentialsManager`](credentials_provider.MapBasedCredentialsManager.md)

#### Inherited from

[CachingCredentialsManager](credentials_provider.CachingCredentialsManager.md).[base](credentials_provider.CachingCredentialsManager.md#base)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[CachingCredentialsManager](credentials_provider.CachingCredentialsManager.md).[disposedStacks](credentials_provider.CachingCredentialsManager.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### memoize

• **memoize**: [`StringMemoize`](util_memoize.StringMemoize.md)

#### Inherited from

[CachingCredentialsManager](credentials_provider.CachingCredentialsManager.md).[memoize](credentials_provider.CachingCredentialsManager.md#memoize)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L133)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[CachingCredentialsManager](credentials_provider.CachingCredentialsManager.md).[refCount](credentials_provider.CachingCredentialsManager.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[CachingCredentialsManager](credentials_provider.CachingCredentialsManager.md).[wasDisposed](credentials_provider.CachingCredentialsManager.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`CachingMapBasedCredentialsManager`](credentials_provider.CachingMapBasedCredentialsManager.md)

#### Returns

[`CachingMapBasedCredentialsManager`](credentials_provider.CachingMapBasedCredentialsManager.md)

#### Inherited from

[CachingCredentialsManager](credentials_provider.CachingCredentialsManager.md).[addRef](credentials_provider.CachingCredentialsManager.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[CachingCredentialsManager](credentials_provider.CachingCredentialsManager.md).[dispose](credentials_provider.CachingCredentialsManager.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[CachingCredentialsManager](credentials_provider.CachingCredentialsManager.md).[disposed](credentials_provider.CachingCredentialsManager.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### getCredentialsProvider

▸ **getCredentialsProvider**<`Credentials`\>(`key`, `parameters?`): [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`Credentials`\>

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `parameters?` | `any` |

#### Returns

[`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`Credentials`\>

#### Inherited from

[CachingCredentialsManager](credentials_provider.CachingCredentialsManager.md).[getCredentialsProvider](credentials_provider.CachingCredentialsManager.md#getcredentialsprovider)

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L139)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[CachingCredentialsManager](credentials_provider.CachingCredentialsManager.md).[refCountReachedZero](credentials_provider.CachingCredentialsManager.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

___

### register

▸ **register**<`Credentials`\>(`key`, `providerGetter`): `void`

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `providerGetter` | [`ProviderGetter`](../modules/credentials_provider.md#providergetter)<`Credentials`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/index.ts#L155)

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

[CachingCredentialsManager](credentials_provider.CachingCredentialsManager.md).[registerCancellable](credentials_provider.CachingCredentialsManager.md#registercancellable)

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

[CachingCredentialsManager](credentials_provider.CachingCredentialsManager.md).[registerDisposer](credentials_provider.CachingCredentialsManager.md#registerdisposer)

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

[CachingCredentialsManager](credentials_provider.CachingCredentialsManager.md).[registerEventListener](credentials_provider.CachingCredentialsManager.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

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

[CachingCredentialsManager](credentials_provider.CachingCredentialsManager.md).[unregisterDisposer](credentials_provider.CachingCredentialsManager.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
