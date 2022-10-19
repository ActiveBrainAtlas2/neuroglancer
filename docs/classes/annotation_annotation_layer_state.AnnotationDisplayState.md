[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / AnnotationDisplayState

# Class: AnnotationDisplayState

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).AnnotationDisplayState

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`AnnotationDisplayState`**

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state.AnnotationDisplayState.md#constructor)

### Properties

- [color](annotation_annotation_layer_state.AnnotationDisplayState.md#color)
- [displayUnfiltered](annotation_annotation_layer_state.AnnotationDisplayState.md#displayunfiltered)
- [disposedStacks](annotation_annotation_layer_state.AnnotationDisplayState.md#disposedstacks)
- [fallbackShaderControls](annotation_annotation_layer_state.AnnotationDisplayState.md#fallbackshadercontrols)
- [hoverState](annotation_annotation_layer_state.AnnotationDisplayState.md#hoverstate)
- [ignoreNullSegmentFilter](annotation_annotation_layer_state.AnnotationDisplayState.md#ignorenullsegmentfilter)
- [refCount](annotation_annotation_layer_state.AnnotationDisplayState.md#refcount)
- [relationshipStates](annotation_annotation_layer_state.AnnotationDisplayState.md#relationshipstates)
- [shader](annotation_annotation_layer_state.AnnotationDisplayState.md#shader)
- [shaderControls](annotation_annotation_layer_state.AnnotationDisplayState.md#shadercontrols)
- [shaderError](annotation_annotation_layer_state.AnnotationDisplayState.md#shadererror)
- [wasDisposed](annotation_annotation_layer_state.AnnotationDisplayState.md#wasdisposed)

### Methods

- [addRef](annotation_annotation_layer_state.AnnotationDisplayState.md#addref)
- [dispose](annotation_annotation_layer_state.AnnotationDisplayState.md#dispose)
- [disposed](annotation_annotation_layer_state.AnnotationDisplayState.md#disposed)
- [refCountReachedZero](annotation_annotation_layer_state.AnnotationDisplayState.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state.AnnotationDisplayState.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state.AnnotationDisplayState.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state.AnnotationDisplayState.md#registereventlistener)
- [unregisterDisposer](annotation_annotation_layer_state.AnnotationDisplayState.md#unregisterdisposer)

## Constructors

### constructor

• **new AnnotationDisplayState**()

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

## Properties

### color

• **color**: [`TrackableRGB`](util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L118)

___

### displayUnfiltered

• **displayUnfiltered**: [`CachedLazyDerivedWatchableValue`](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L121)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### fallbackShaderControls

• **fallbackShaderControls**: [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<[`ShaderControlsBuilderState`](../interfaces/webgl_shader_ui_controls.ShaderControlsBuilderState.md)\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L115)

___

### hoverState

• **hoverState**: [`AnnotationHoverState`](annotation_annotation_layer_state.AnnotationHoverState.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L135)

___

### ignoreNullSegmentFilter

• **ignoreNullSegmentFilter**: [`TrackableBoolean`](annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L120)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### relationshipStates

• **relationshipStates**: [`WatchableAnnotationRelationshipStates`](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L119)

___

### shader

• **shader**: [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L113)

___

### shaderControls

• **shaderControls**: [`ShaderControlState`](webgl_shader_ui_controls.ShaderControlState.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L114)

___

### shaderError

• **shaderError**: [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<`undefined` \| ``null`` \| [`ShaderCompilationError`](webgl_shader.ShaderCompilationError.md) \| [`ShaderLinkError`](webgl_shader.ShaderLinkError.md)\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L117)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`AnnotationDisplayState`](annotation_annotation_layer_state.AnnotationDisplayState.md)

#### Returns

[`AnnotationDisplayState`](annotation_annotation_layer_state.AnnotationDisplayState.md)

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
