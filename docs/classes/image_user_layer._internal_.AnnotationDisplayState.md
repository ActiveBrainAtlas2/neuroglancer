[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / AnnotationDisplayState

# Class: AnnotationDisplayState

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).AnnotationDisplayState

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`AnnotationDisplayState`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.AnnotationDisplayState.md#constructor)

### Properties

- [color](image_user_layer._internal_.AnnotationDisplayState.md#color)
- [displayUnfiltered](image_user_layer._internal_.AnnotationDisplayState.md#displayunfiltered)
- [disposedStacks](image_user_layer._internal_.AnnotationDisplayState.md#disposedstacks)
- [fallbackShaderControls](image_user_layer._internal_.AnnotationDisplayState.md#fallbackshadercontrols)
- [hoverState](image_user_layer._internal_.AnnotationDisplayState.md#hoverstate)
- [ignoreNullSegmentFilter](image_user_layer._internal_.AnnotationDisplayState.md#ignorenullsegmentfilter)
- [refCount](image_user_layer._internal_.AnnotationDisplayState.md#refcount)
- [relationshipStates](image_user_layer._internal_.AnnotationDisplayState.md#relationshipstates)
- [shader](image_user_layer._internal_.AnnotationDisplayState.md#shader)
- [shaderControls](image_user_layer._internal_.AnnotationDisplayState.md#shadercontrols)
- [shaderError](image_user_layer._internal_.AnnotationDisplayState.md#shadererror)
- [wasDisposed](image_user_layer._internal_.AnnotationDisplayState.md#wasdisposed)

### Methods

- [addRef](image_user_layer._internal_.AnnotationDisplayState.md#addref)
- [dispose](image_user_layer._internal_.AnnotationDisplayState.md#dispose)
- [disposed](image_user_layer._internal_.AnnotationDisplayState.md#disposed)
- [refCountReachedZero](image_user_layer._internal_.AnnotationDisplayState.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.AnnotationDisplayState.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.AnnotationDisplayState.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.AnnotationDisplayState.md#registereventlistener)
- [unregisterDisposer](image_user_layer._internal_.AnnotationDisplayState.md#unregisterdisposer)

## Constructors

### constructor

• **new AnnotationDisplayState**()

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

## Properties

### color

• **color**: [`TrackableRGB`](data_panel_layout._internal_.TrackableRGB.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L118)

___

### displayUnfiltered

• **displayUnfiltered**: [`CachedLazyDerivedWatchableValue`](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L121)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### fallbackShaderControls

• **fallbackShaderControls**: [`WatchableValue`](trackable_value.WatchableValue.md)<[`ShaderControlsBuilderState`](../interfaces/image_user_layer._internal_.ShaderControlsBuilderState.md)\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L115)

___

### hoverState

• **hoverState**: [`AnnotationHoverState`](image_user_layer._internal_.AnnotationHoverState.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L135)

___

### ignoreNullSegmentFilter

• **ignoreNullSegmentFilter**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L120)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### relationshipStates

• **relationshipStates**: [`WatchableAnnotationRelationshipStates`](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L119)

___

### shader

• **shader**: [`TrackableValue`](trackable_value.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L113)

___

### shaderControls

• **shaderControls**: [`ShaderControlState`](image_user_layer._internal_.ShaderControlState.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L114)

___

### shaderError

• **shaderError**: [`WatchableValue`](trackable_value.WatchableValue.md)<`undefined` \| ``null`` \| [`ShaderCompilationError`](image_user_layer._internal_.ShaderCompilationError.md) \| [`ShaderLinkError`](image_user_layer._internal_.ShaderLinkError.md)\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L117)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`AnnotationDisplayState`](image_user_layer._internal_.AnnotationDisplayState.md)

#### Returns

[`AnnotationDisplayState`](image_user_layer._internal_.AnnotationDisplayState.md)

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
