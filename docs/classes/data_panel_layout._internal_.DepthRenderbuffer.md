[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / DepthRenderbuffer

# Class: DepthRenderbuffer

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).DepthRenderbuffer

## Hierarchy

- [`Renderbuffer`](data_panel_layout._internal_.Renderbuffer.md)

  ↳ **`DepthRenderbuffer`**

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.DepthRenderbuffer.md#constructor)

### Properties

- [disposedStacks](data_panel_layout._internal_.DepthRenderbuffer.md#disposedstacks)
- [gl](data_panel_layout._internal_.DepthRenderbuffer.md#gl)
- [height](data_panel_layout._internal_.DepthRenderbuffer.md#height)
- [includeStencilBuffer](data_panel_layout._internal_.DepthRenderbuffer.md#includestencilbuffer)
- [internalformat](data_panel_layout._internal_.DepthRenderbuffer.md#internalformat)
- [refCount](data_panel_layout._internal_.DepthRenderbuffer.md#refcount)
- [renderbuffer](data_panel_layout._internal_.DepthRenderbuffer.md#renderbuffer)
- [wasDisposed](data_panel_layout._internal_.DepthRenderbuffer.md#wasdisposed)
- [width](data_panel_layout._internal_.DepthRenderbuffer.md#width)

### Methods

- [addRef](data_panel_layout._internal_.DepthRenderbuffer.md#addref)
- [attachToFramebuffer](data_panel_layout._internal_.DepthRenderbuffer.md#attachtoframebuffer)
- [dispose](data_panel_layout._internal_.DepthRenderbuffer.md#dispose)
- [disposed](data_panel_layout._internal_.DepthRenderbuffer.md#disposed)
- [hasSize](data_panel_layout._internal_.DepthRenderbuffer.md#hassize)
- [performResize](data_panel_layout._internal_.DepthRenderbuffer.md#performresize)
- [refCountReachedZero](data_panel_layout._internal_.DepthRenderbuffer.md#refcountreachedzero)
- [registerCancellable](data_panel_layout._internal_.DepthRenderbuffer.md#registercancellable)
- [registerDisposer](data_panel_layout._internal_.DepthRenderbuffer.md#registerdisposer)
- [registerEventListener](data_panel_layout._internal_.DepthRenderbuffer.md#registereventlistener)
- [resize](data_panel_layout._internal_.DepthRenderbuffer.md#resize)
- [unregisterDisposer](data_panel_layout._internal_.DepthRenderbuffer.md#unregisterdisposer)

## Constructors

### constructor

• **new DepthRenderbuffer**(`gl`, `includeStencilBuffer?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) | `undefined` |
| `includeStencilBuffer` | `boolean` | `false` |

#### Overrides

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[constructor](data_panel_layout._internal_.Renderbuffer.md#constructor)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L72)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[disposedStacks](data_panel_layout._internal_.Renderbuffer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Inherited from

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[gl](data_panel_layout._internal_.Renderbuffer.md#gl)

___

### height

• **height**: `number` = `Number.NaN`

#### Inherited from

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[height](data_panel_layout._internal_.Renderbuffer.md#height)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L28)

___

### includeStencilBuffer

• **includeStencilBuffer**: `boolean` = `false`

___

### internalformat

• **internalformat**: `number`

#### Inherited from

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[internalformat](data_panel_layout._internal_.Renderbuffer.md#internalformat)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[refCount](data_panel_layout._internal_.Renderbuffer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### renderbuffer

• **renderbuffer**: ``null`` \| [`WebGLRenderbuffer`](../modules/axes_lines._internal_.md#webglrenderbuffer) = `null`

#### Inherited from

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[renderbuffer](data_panel_layout._internal_.Renderbuffer.md#renderbuffer)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L47)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[wasDisposed](data_panel_layout._internal_.Renderbuffer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: `number` = `Number.NaN`

#### Inherited from

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[width](data_panel_layout._internal_.Renderbuffer.md#width)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L27)

## Methods

### addRef

▸ **addRef**(): [`DepthRenderbuffer`](data_panel_layout._internal_.DepthRenderbuffer.md)

#### Returns

[`DepthRenderbuffer`](data_panel_layout._internal_.DepthRenderbuffer.md)

#### Inherited from

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[addRef](data_panel_layout._internal_.Renderbuffer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### attachToFramebuffer

▸ **attachToFramebuffer**(): `void`

#### Returns

`void`

#### Overrides

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[attachToFramebuffer](data_panel_layout._internal_.Renderbuffer.md#attachtoframebuffer)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L75)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[dispose](data_panel_layout._internal_.Renderbuffer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[disposed](data_panel_layout._internal_.Renderbuffer.md#disposed)

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

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[hasSize](data_panel_layout._internal_.Renderbuffer.md#hassize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L30)

___

### performResize

▸ `Protected` **performResize**(): `void`

#### Returns

`void`

#### Inherited from

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[performResize](data_panel_layout._internal_.Renderbuffer.md#performresize)

#### Defined in

[src/neuroglancer/webgl/offscreen.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/offscreen.ts#L54)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[refCountReachedZero](data_panel_layout._internal_.Renderbuffer.md#refcountreachedzero)

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

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[registerCancellable](data_panel_layout._internal_.Renderbuffer.md#registercancellable)

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

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[registerDisposer](data_panel_layout._internal_.Renderbuffer.md#registerdisposer)

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

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[registerEventListener](data_panel_layout._internal_.Renderbuffer.md#registereventlistener)

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

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[resize](data_panel_layout._internal_.Renderbuffer.md#resize)

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

[Renderbuffer](data_panel_layout._internal_.Renderbuffer.md).[unregisterDisposer](data_panel_layout._internal_.Renderbuffer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
