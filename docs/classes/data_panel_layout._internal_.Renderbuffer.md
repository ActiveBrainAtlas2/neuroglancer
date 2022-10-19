[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / Renderbuffer

# Class: Renderbuffer

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).Renderbuffer

## Hierarchy

- [`SizeManaged`](data_panel_layout._internal_.SizeManaged.md)

  ↳ **`Renderbuffer`**

  ↳↳ [`DepthRenderbuffer`](data_panel_layout._internal_.DepthRenderbuffer.md)

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.Renderbuffer.md#constructor)

### Properties

- [disposedStacks](data_panel_layout._internal_.Renderbuffer.md#disposedstacks)
- [gl](data_panel_layout._internal_.Renderbuffer.md#gl)
- [height](data_panel_layout._internal_.Renderbuffer.md#height)
- [internalformat](data_panel_layout._internal_.Renderbuffer.md#internalformat)
- [refCount](data_panel_layout._internal_.Renderbuffer.md#refcount)
- [renderbuffer](data_panel_layout._internal_.Renderbuffer.md#renderbuffer)
- [wasDisposed](data_panel_layout._internal_.Renderbuffer.md#wasdisposed)
- [width](data_panel_layout._internal_.Renderbuffer.md#width)

### Methods

- [addRef](data_panel_layout._internal_.Renderbuffer.md#addref)
- [attachToFramebuffer](data_panel_layout._internal_.Renderbuffer.md#attachtoframebuffer)
- [dispose](data_panel_layout._internal_.Renderbuffer.md#dispose)
- [disposed](data_panel_layout._internal_.Renderbuffer.md#disposed)
- [hasSize](data_panel_layout._internal_.Renderbuffer.md#hassize)
- [performResize](data_panel_layout._internal_.Renderbuffer.md#performresize)
- [refCountReachedZero](data_panel_layout._internal_.Renderbuffer.md#refcountreachedzero)
- [registerCancellable](data_panel_layout._internal_.Renderbuffer.md#registercancellable)
- [registerDisposer](data_panel_layout._internal_.Renderbuffer.md#registerdisposer)
- [registerEventListener](data_panel_layout._internal_.Renderbuffer.md#registereventlistener)
- [resize](data_panel_layout._internal_.Renderbuffer.md#resize)
- [unregisterDisposer](data_panel_layout._internal_.Renderbuffer.md#unregisterdisposer)

## Constructors

### constructor

• **new Renderbuffer**(`gl`, `internalformat`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |
| `internalformat` | `number` |

#### Overrides

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[constructor](data_panel_layout._internal_.SizeManaged.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L49)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[disposedStacks](data_panel_layout._internal_.SizeManaged.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/axes_lines._internal_.GL.md)

___

### height

• **height**: `number` = `Number.NaN`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[height](data_panel_layout._internal_.SizeManaged.md#height)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L28)

___

### internalformat

• **internalformat**: `number`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[refCount](data_panel_layout._internal_.SizeManaged.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### renderbuffer

• **renderbuffer**: ``null`` \| [`WebGLRenderbuffer`](../modules/axes_lines._internal_.md#webglrenderbuffer) = `null`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L47)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[wasDisposed](data_panel_layout._internal_.SizeManaged.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `Number.NaN`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[width](data_panel_layout._internal_.SizeManaged.md#width)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L27)

## Methods

### addRef

▸ **addRef**(): [`Renderbuffer`](data_panel_layout._internal_.Renderbuffer.md)

#### Returns

[`Renderbuffer`](data_panel_layout._internal_.Renderbuffer.md)

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[addRef](data_panel_layout._internal_.SizeManaged.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### attachToFramebuffer

▸ **attachToFramebuffer**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L65)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[dispose](data_panel_layout._internal_.SizeManaged.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[disposed](data_panel_layout._internal_.SizeManaged.md#disposed)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L61)

___

### hasSize

▸ **hasSize**(`width`, `height`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`boolean`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[hasSize](data_panel_layout._internal_.SizeManaged.md#hassize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L30)

___

### performResize

▸ `Protected` **performResize**(): `void`

#### Returns

`void`

#### Overrides

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[performResize](data_panel_layout._internal_.SizeManaged.md#performresize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L54)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[refCountReachedZero](data_panel_layout._internal_.SizeManaged.md#refcountreachedzero)

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

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[registerCancellable](data_panel_layout._internal_.SizeManaged.md#registercancellable)

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

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[registerDisposer](data_panel_layout._internal_.SizeManaged.md#registerdisposer)

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

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[registerEventListener](data_panel_layout._internal_.SizeManaged.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### resize

▸ **resize**(`width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[resize](data_panel_layout._internal_.SizeManaged.md#resize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L34)

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

[SizeManaged](data_panel_layout._internal_.SizeManaged.md).[unregisterDisposer](data_panel_layout._internal_.SizeManaged.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
