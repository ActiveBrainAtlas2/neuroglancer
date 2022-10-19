[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / AxesLineHelper

# Class: AxesLineHelper

[axes_lines](../modules/axes_lines.md).AxesLineHelper

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

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
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/axes_lines.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/axes_lines.ts#L48)

## Properties

### colorBuffer

• **colorBuffer**: [`Buffer`](axes_lines._internal_.Buffer.md)

#### Defined in

[src/neuroglancer/axes_lines.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/axes_lines.ts#L45)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/axes_lines._internal_.GL.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### trivialColorShader

• **trivialColorShader**: [`ShaderProgram`](axes_lines._internal_.ShaderProgram.md)

#### Defined in

[src/neuroglancer/axes_lines.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/axes_lines.ts#L46)

___

### vertexBuffer

• **vertexBuffer**: [`Buffer`](axes_lines._internal_.Buffer.md)

#### Defined in

[src/neuroglancer/axes_lines.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/axes_lines.ts#L44)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`AxesLineHelper`](axes_lines.AxesLineHelper.md)

#### Returns

[`AxesLineHelper`](axes_lines.AxesLineHelper.md)

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

### draw

▸ **draw**(`mat`, `blend?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mat` | [`mat4`](axes_lines._internal_.mat4.md) | `undefined` |
| `blend` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/axes_lines.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/axes_lines.ts#L79)

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

___

### get

▸ `Static` **get**(`gl`): [`AxesLineHelper`](axes_lines.AxesLineHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Returns

[`AxesLineHelper`](axes_lines.AxesLineHelper.md)

#### Defined in

[src/neuroglancer/axes_lines.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/axes_lines.ts#L75)
