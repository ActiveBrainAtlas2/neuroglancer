[neuroglancer](../README.md) / [Modules](../modules.md) / [perspective\_view/panel](../modules/perspective_view_panel.md) / [<internal\>](../modules/perspective_view_panel._internal_.md) / AxesLineHelper

# Class: AxesLineHelper

[perspective_view/panel](../modules/perspective_view_panel.md).[<internal>](../modules/perspective_view_panel._internal_.md).AxesLineHelper

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`AxesLineHelper`**

## Table of contents

### Constructors

- [constructor](perspective_view_panel._internal_.AxesLineHelper.md#constructor)

### Properties

- [colorBuffer](perspective_view_panel._internal_.AxesLineHelper.md#colorbuffer)
- [disposedStacks](perspective_view_panel._internal_.AxesLineHelper.md#disposedstacks)
- [gl](perspective_view_panel._internal_.AxesLineHelper.md#gl)
- [refCount](perspective_view_panel._internal_.AxesLineHelper.md#refcount)
- [trivialColorShader](perspective_view_panel._internal_.AxesLineHelper.md#trivialcolorshader)
- [vertexBuffer](perspective_view_panel._internal_.AxesLineHelper.md#vertexbuffer)
- [wasDisposed](perspective_view_panel._internal_.AxesLineHelper.md#wasdisposed)

### Methods

- [addRef](perspective_view_panel._internal_.AxesLineHelper.md#addref)
- [dispose](perspective_view_panel._internal_.AxesLineHelper.md#dispose)
- [disposed](perspective_view_panel._internal_.AxesLineHelper.md#disposed)
- [draw](perspective_view_panel._internal_.AxesLineHelper.md#draw)
- [refCountReachedZero](perspective_view_panel._internal_.AxesLineHelper.md#refcountreachedzero)
- [registerCancellable](perspective_view_panel._internal_.AxesLineHelper.md#registercancellable)
- [registerDisposer](perspective_view_panel._internal_.AxesLineHelper.md#registerdisposer)
- [registerEventListener](perspective_view_panel._internal_.AxesLineHelper.md#registereventlistener)
- [unregisterDisposer](perspective_view_panel._internal_.AxesLineHelper.md#unregisterdisposer)
- [get](perspective_view_panel._internal_.AxesLineHelper.md#get)

## Constructors

### constructor

• **new AxesLineHelper**(`gl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/axes_lines.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/axes_lines.ts#L48)

## Properties

### colorBuffer

• **colorBuffer**: [`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/axes_lines.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/axes_lines.ts#L45)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### trivialColorShader

• **trivialColorShader**: [`ShaderProgram`](webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/axes_lines.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/axes_lines.ts#L46)

___

### vertexBuffer

• **vertexBuffer**: [`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/axes_lines.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/axes_lines.ts#L44)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`AxesLineHelper`](perspective_view_panel._internal_.AxesLineHelper.md)

#### Returns

[`AxesLineHelper`](perspective_view_panel._internal_.AxesLineHelper.md)

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

### draw

▸ **draw**(`mat`, `blend?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mat` | [`mat4`](util_geom.mat4.md) | `undefined` |
| `blend` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/axes_lines.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/axes_lines.ts#L79)

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

___

### get

▸ `Static` **get**(`gl`): [`AxesLineHelper`](perspective_view_panel._internal_.AxesLineHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

[`AxesLineHelper`](perspective_view_panel._internal_.AxesLineHelper.md)

#### Defined in

[src/neuroglancer/axes_lines.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/axes_lines.ts#L75)
