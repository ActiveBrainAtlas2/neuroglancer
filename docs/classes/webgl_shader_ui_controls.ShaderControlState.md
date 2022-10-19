[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/shader\_ui\_controls](../modules/webgl_shader_ui_controls.md) / ShaderControlState

# Class: ShaderControlState

[webgl/shader_ui_controls](../modules/webgl_shader_ui_controls.md).ShaderControlState

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`ShaderControlState`**

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)
- [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`ShaderControlMap`](../modules/webgl_shader_ui_controls.md#shadercontrolmap)\>

## Table of contents

### Constructors

- [constructor](webgl_shader_ui_controls.ShaderControlState.md#constructor)

### Properties

- [builderState](webgl_shader_ui_controls.ShaderControlState.md#builderstate)
- [changed](webgl_shader_ui_controls.ShaderControlState.md#changed)
- [channelCoordinateSpaceCombiner](webgl_shader_ui_controls.ShaderControlState.md#channelcoordinatespacecombiner)
- [controls](webgl_shader_ui_controls.ShaderControlState.md#controls)
- [controlsGeneration](webgl_shader_ui_controls.ShaderControlState.md#controlsgeneration)
- [dataContext](webgl_shader_ui_controls.ShaderControlState.md#datacontext)
- [dataContextGeneration](webgl_shader_ui_controls.ShaderControlState.md#datacontextgeneration)
- [disposedStacks](webgl_shader_ui_controls.ShaderControlState.md#disposedstacks)
- [fragmentMain](webgl_shader_ui_controls.ShaderControlState.md#fragmentmain)
- [fragmentMainGeneration](webgl_shader_ui_controls.ShaderControlState.md#fragmentmaingeneration)
- [histogramSpecifications](webgl_shader_ui_controls.ShaderControlState.md#histogramspecifications)
- [parseErrors](webgl_shader_ui_controls.ShaderControlState.md#parseerrors)
- [parseErrors\_](webgl_shader_ui_controls.ShaderControlState.md#parseerrors_)
- [parseResult](webgl_shader_ui_controls.ShaderControlState.md#parseresult)
- [parseResultChanged](webgl_shader_ui_controls.ShaderControlState.md#parseresultchanged)
- [parseResult\_](webgl_shader_ui_controls.ShaderControlState.md#parseresult_)
- [processedFragmentMain](webgl_shader_ui_controls.ShaderControlState.md#processedfragmentmain)
- [processedFragmentMain\_](webgl_shader_ui_controls.ShaderControlState.md#processedfragmentmain_)
- [refCount](webgl_shader_ui_controls.ShaderControlState.md#refcount)
- [state\_](webgl_shader_ui_controls.ShaderControlState.md#state_)
- [unparsedJson](webgl_shader_ui_controls.ShaderControlState.md#unparsedjson)
- [wasDisposed](webgl_shader_ui_controls.ShaderControlState.md#wasdisposed)

### Accessors

- [state](webgl_shader_ui_controls.ShaderControlState.md#state)
- [value](webgl_shader_ui_controls.ShaderControlState.md#value)

### Methods

- [addRef](webgl_shader_ui_controls.ShaderControlState.md#addref)
- [dispose](webgl_shader_ui_controls.ShaderControlState.md#dispose)
- [disposed](webgl_shader_ui_controls.ShaderControlState.md#disposed)
- [handleControlsChanged](webgl_shader_ui_controls.ShaderControlState.md#handlecontrolschanged)
- [handleFragmentMainChanged](webgl_shader_ui_controls.ShaderControlState.md#handlefragmentmainchanged)
- [refCountReachedZero](webgl_shader_ui_controls.ShaderControlState.md#refcountreachedzero)
- [registerCancellable](webgl_shader_ui_controls.ShaderControlState.md#registercancellable)
- [registerDisposer](webgl_shader_ui_controls.ShaderControlState.md#registerdisposer)
- [registerEventListener](webgl_shader_ui_controls.ShaderControlState.md#registereventlistener)
- [reset](webgl_shader_ui_controls.ShaderControlState.md#reset)
- [restoreState](webgl_shader_ui_controls.ShaderControlState.md#restorestate)
- [toJSON](webgl_shader_ui_controls.ShaderControlState.md#tojson)
- [unregisterDisposer](webgl_shader_ui_controls.ShaderControlState.md#unregisterdisposer)

## Constructors

### constructor

• **new ShaderControlState**(`fragmentMain`, `dataContext?`, `channelCoordinateSpaceCombiner?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragmentMain` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`string`\> |
| `dataContext` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<``null`` \| [`ShaderDataContext`](../interfaces/webgl_shader_ui_controls.ShaderDataContext.md)\> |
| `channelCoordinateSpaceCombiner?` | [`CoordinateSpaceCombiner`](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:665](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L665)

## Properties

### builderState

• **builderState**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`ShaderControlsBuilderState`](../interfaces/webgl_shader_ui_controls.ShaderControlsBuilderState.md)\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:654](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L654)

___

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[changed](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:649](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L649)

___

### channelCoordinateSpaceCombiner

• `Optional` **channelCoordinateSpaceCombiner**: [`CoordinateSpaceCombiner`](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md)

___

### controls

• **controls**: [`WatchableShaderUiControls`](webgl_shader_ui_controls.WatchableShaderUiControls.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:650](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L650)

___

### controlsGeneration

• `Private` **controlsGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:662](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L662)

___

### dataContext

• **dataContext**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<``null`` \| [`ShaderDataContext`](../interfaces/webgl_shader_ui_controls.ShaderDataContext.md)\>

___

### dataContextGeneration

• `Private` **dataContextGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:658](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L658)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### fragmentMain

• **fragmentMain**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`string`\>

___

### fragmentMainGeneration

• `Private` **fragmentMainGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:657](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L657)

___

### histogramSpecifications

• **histogramSpecifications**: [`HistogramSpecifications`](webgl_empirical_cdf.HistogramSpecifications.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:655](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L655)

___

### parseErrors

• **parseErrors**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`ShaderControlParseError`](../interfaces/webgl_shader_ui_controls.ShaderControlParseError.md)[]\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:651](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L651)

___

### parseErrors\_

• `Private` **parseErrors\_**: [`ShaderControlParseError`](../interfaces/webgl_shader_ui_controls.ShaderControlParseError.md)[] = `[]`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:659](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L659)

___

### parseResult

• **parseResult**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`ShaderControlsParseResult`](../interfaces/webgl_shader_ui_controls.ShaderControlsParseResult.md)\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:653](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L653)

___

### parseResultChanged

• `Private` **parseResultChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:663](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L663)

___

### parseResult\_

• `Private` **parseResult\_**: [`ShaderControlsParseResult`](../interfaces/webgl_shader_ui_controls.ShaderControlsParseResult.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:661](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L661)

___

### processedFragmentMain

• **processedFragmentMain**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`string`\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:652](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L652)

___

### processedFragmentMain\_

• `Private` **processedFragmentMain\_**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:660](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L660)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### state\_

• `Private` **state\_**: [`ShaderControlMap`](../modules/webgl_shader_ui_controls.md#shadercontrolmap)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:819](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L819)

___

### unparsedJson

• `Private` **unparsedJson**: `any` = `undefined`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:832](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L832)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### state

• `get` **state**(): [`ShaderControlMap`](../modules/webgl_shader_ui_controls.md#shadercontrolmap)

#### Returns

[`ShaderControlMap`](../modules/webgl_shader_ui_controls.md#shadercontrolmap)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:821](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L821)

___

### value

• `get` **value**(): [`ShaderControlMap`](../modules/webgl_shader_ui_controls.md#shadercontrolmap)

#### Returns

[`ShaderControlMap`](../modules/webgl_shader_ui_controls.md#shadercontrolmap)

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[value](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:828](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L828)

## Methods

### addRef

▸ **addRef**(): [`ShaderControlState`](webgl_shader_ui_controls.ShaderControlState.md)

#### Returns

[`ShaderControlState`](webgl_shader_ui_controls.ShaderControlState.md)

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

### handleControlsChanged

▸ `Private` **handleControlsChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:765](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L765)

___

### handleFragmentMainChanged

▸ `Private` **handleFragmentMainChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:733](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L733)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[reset](../interfaces/util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:858](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L858)

___

### restoreState

▸ **restoreState**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[restoreState](../interfaces/util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:834](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L834)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:868](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader_ui_controls.ts#L868)

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
