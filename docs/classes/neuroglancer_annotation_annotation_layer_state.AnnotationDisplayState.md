[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/annotation\_layer\_state](../modules/neuroglancer_annotation_annotation_layer_state.md) / AnnotationDisplayState

# Class: AnnotationDisplayState

[neuroglancer/annotation/annotation_layer_state](../modules/neuroglancer_annotation_annotation_layer_state.md).AnnotationDisplayState

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

  ↳ **`AnnotationDisplayState`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#constructor)

### Properties

- [color](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#color)
- [displayUnfiltered](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#displayunfiltered)
- [disposedStacks](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#disposedstacks)
- [fallbackShaderControls](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#fallbackshadercontrols)
- [hoverState](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#hoverstate)
- [ignoreNullSegmentFilter](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#ignorenullsegmentfilter)
- [refCount](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#refcount)
- [relationshipStates](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#relationshipstates)
- [shader](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#shader)
- [shaderControls](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#shadercontrols)
- [shaderError](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#shadererror)
- [wasDisposed](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#wasdisposed)

### Methods

- [addRef](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#addref)
- [dispose](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#dispose)
- [disposed](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#disposed)
- [refCountReachedZero](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#refcountreachedzero)
- [registerCancellable](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#registercancellable)
- [registerDisposer](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#registerdisposer)
- [registerEventListener](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#registereventlistener)
- [unregisterDisposer](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md#unregisterdisposer)

## Constructors

### constructor

• **new AnnotationDisplayState**()

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

## Properties

### color

• **color**: [`TrackableRGB`](neuroglancer_util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/annotation_layer_state.ts#L118)

___

### displayUnfiltered

• **displayUnfiltered**: [`CachedLazyDerivedWatchableValue`](neuroglancer_annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/annotation_layer_state.ts#L121)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### fallbackShaderControls

• **fallbackShaderControls**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<[`ShaderControlsBuilderState`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md)\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/annotation_layer_state.ts#L115)

___

### hoverState

• **hoverState**: [`AnnotationHoverState`](neuroglancer_annotation_annotation_layer_state.AnnotationHoverState.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/annotation_layer_state.ts#L135)

___

### ignoreNullSegmentFilter

• **ignoreNullSegmentFilter**: [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/annotation_layer_state.ts#L120)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### relationshipStates

• **relationshipStates**: [`WatchableAnnotationRelationshipStates`](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/annotation_layer_state.ts#L119)

___

### shader

• **shader**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/annotation_layer_state.ts#L113)

___

### shaderControls

• **shaderControls**: [`ShaderControlState`](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/annotation_layer_state.ts#L114)

___

### shaderError

• **shaderError**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| ``null`` \| [`ShaderCompilationError`](neuroglancer_webgl_shader.ShaderCompilationError.md) \| [`ShaderLinkError`](neuroglancer_webgl_shader.ShaderLinkError.md)\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/annotation_layer_state.ts#L117)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`AnnotationDisplayState`](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md)

#### Returns

[`AnnotationDisplayState`](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md)

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
