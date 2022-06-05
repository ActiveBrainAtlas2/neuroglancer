[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / AxesLineHelper

# Class: AxesLineHelper

[axes_lines](../modules/axes_lines.md).AxesLineHelper

## Hierarchy

- `RefCounted`

  ↳ **`AxesLineHelper`**

## Table of contents

### Constructors

- [constructor](axes_lines.AxesLineHelper.md#constructor)

### Properties

- [colorBuffer](axes_lines.AxesLineHelper.md#colorbuffer)
- [disposedStacks](axes_lines.AxesLineHelper.md#disposedstacks)
- [gl](axes_lines.AxesLineHelper.md#gl)
- [refCount](axes_lines.AxesLineHelper.md#refcount)
- [trivialColorShader](axes_lines.AxesLineHelper.md#trivialcolorshader)
- [vertexBuffer](axes_lines.AxesLineHelper.md#vertexbuffer)
- [wasDisposed](axes_lines.AxesLineHelper.md#wasdisposed)

### Methods

- [addRef](axes_lines.AxesLineHelper.md#addref)
- [dispose](axes_lines.AxesLineHelper.md#dispose)
- [disposed](axes_lines.AxesLineHelper.md#disposed)
- [draw](axes_lines.AxesLineHelper.md#draw)
- [refCountReachedZero](axes_lines.AxesLineHelper.md#refcountreachedzero)
- [registerCancellable](axes_lines.AxesLineHelper.md#registercancellable)
- [registerDisposer](axes_lines.AxesLineHelper.md#registerdisposer)
- [registerEventListener](axes_lines.AxesLineHelper.md#registereventlistener)
- [unregisterDisposer](axes_lines.AxesLineHelper.md#unregisterdisposer)
- [get](axes_lines.AxesLineHelper.md#get)

## Constructors

### constructor

• **new AxesLineHelper**(`gl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `GL` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/axes_lines.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/axes_lines.ts#L48)

## Properties

### colorBuffer

• **colorBuffer**: `Buffer`

#### Defined in

[src/neuroglancer/axes_lines.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/axes_lines.ts#L45)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: `GL`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L45)

___

### trivialColorShader

• **trivialColorShader**: `ShaderProgram`

#### Defined in

[src/neuroglancer/axes_lines.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/axes_lines.ts#L46)

___

### vertexBuffer

• **vertexBuffer**: `Buffer`

#### Defined in

[src/neuroglancer/axes_lines.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/axes_lines.ts#L44)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`AxesLineHelper`](axes_lines.AxesLineHelper.md)

#### Returns

[`AxesLineHelper`](axes_lines.AxesLineHelper.md)

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

### draw

▸ **draw**(`mat`, `blend?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mat` | `mat4` | `undefined` |
| `blend` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/axes_lines.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/axes_lines.ts#L79)

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

___

### get

▸ `Static` **get**(`gl`): [`AxesLineHelper`](axes_lines.AxesLineHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `GL` |

#### Returns

[`AxesLineHelper`](axes_lines.AxesLineHelper.md)

#### Defined in

[src/neuroglancer/axes_lines.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/axes_lines.ts#L75)
