[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/shader\_ui\_controls](../modules/neuroglancer_webgl_shader_ui_controls.md) / ShaderControlState

# Class: ShaderControlState

[neuroglancer/webgl/shader_ui_controls](../modules/neuroglancer_webgl_shader_ui_controls.md).ShaderControlState

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`ShaderControlState`**

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)
- [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`ShaderControlMap`](../modules/neuroglancer_webgl_shader_ui_controls.md#shadercontrolmap)\>

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#constructor)

### Properties

- [builderState](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#builderstate)
- [changed](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#changed)
- [channelCoordinateSpaceCombiner](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#channelcoordinatespacecombiner)
- [controls](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#controls)
- [controlsGeneration](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#controlsgeneration)
- [dataContext](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#datacontext)
- [dataContextGeneration](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#datacontextgeneration)
- [disposedStacks](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#disposedstacks)
- [fragmentMain](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#fragmentmain)
- [fragmentMainGeneration](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#fragmentmaingeneration)
- [histogramSpecifications](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#histogramspecifications)
- [parseErrors](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#parseerrors)
- [parseErrors\_](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#parseerrors_)
- [parseResult](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#parseresult)
- [parseResultChanged](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#parseresultchanged)
- [parseResult\_](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#parseresult_)
- [processedFragmentMain](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#processedfragmentmain)
- [processedFragmentMain\_](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#processedfragmentmain_)
- [refCount](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#refcount)
- [state\_](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#state_)
- [unparsedJson](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#unparsedjson)
- [wasDisposed](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#wasdisposed)

### Accessors

- [state](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#state)
- [value](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#value)

### Methods

- [addRef](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#addref)
- [dispose](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#dispose)
- [disposed](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#disposed)
- [handleControlsChanged](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#handlecontrolschanged)
- [handleFragmentMainChanged](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#handlefragmentmainchanged)
- [refCountReachedZero](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#refcountreachedzero)
- [registerCancellable](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#registercancellable)
- [registerDisposer](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#registerdisposer)
- [registerEventListener](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#registereventlistener)
- [reset](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#reset)
- [restoreState](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#restorestate)
- [toJSON](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#tojson)
- [unregisterDisposer](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md#unregisterdisposer)

## Constructors

### constructor

• **new ShaderControlState**(`fragmentMain`, `dataContext?`, `channelCoordinateSpaceCombiner?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragmentMain` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`string`\> |
| `dataContext` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<``null`` \| [`ShaderDataContext`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderDataContext.md)\> |
| `channelCoordinateSpaceCombiner?` | [`CoordinateSpaceCombiner`](neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:665](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L665)

## Properties

### builderState

• **builderState**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`ShaderControlsBuilderState`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md)\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:654](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L654)

___

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[changed](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:649](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L649)

___

### channelCoordinateSpaceCombiner

• `Optional` **channelCoordinateSpaceCombiner**: [`CoordinateSpaceCombiner`](neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md)

___

### controls

• **controls**: [`WatchableShaderUiControls`](neuroglancer_webgl_shader_ui_controls.WatchableShaderUiControls.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:650](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L650)

___

### controlsGeneration

• `Private` **controlsGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:662](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L662)

___

### dataContext

• **dataContext**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<``null`` \| [`ShaderDataContext`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderDataContext.md)\>

___

### dataContextGeneration

• `Private` **dataContextGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:658](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L658)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### fragmentMain

• **fragmentMain**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`string`\>

___

### fragmentMainGeneration

• `Private` **fragmentMainGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:657](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L657)

___

### histogramSpecifications

• **histogramSpecifications**: [`HistogramSpecifications`](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:655](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L655)

___

### parseErrors

• **parseErrors**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`ShaderControlParseError`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlParseError.md)[]\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:651](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L651)

___

### parseErrors\_

• `Private` **parseErrors\_**: [`ShaderControlParseError`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlParseError.md)[] = `[]`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:659](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L659)

___

### parseResult

• **parseResult**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`ShaderControlsParseResult`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsParseResult.md)\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:653](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L653)

___

### parseResultChanged

• `Private` **parseResultChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:663](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L663)

___

### parseResult\_

• `Private` **parseResult\_**: [`ShaderControlsParseResult`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsParseResult.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:661](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L661)

___

### processedFragmentMain

• **processedFragmentMain**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`string`\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:652](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L652)

___

### processedFragmentMain\_

• `Private` **processedFragmentMain\_**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:660](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L660)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### state\_

• `Private` **state\_**: [`ShaderControlMap`](../modules/neuroglancer_webgl_shader_ui_controls.md#shadercontrolmap)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:819](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L819)

___

### unparsedJson

• `Private` **unparsedJson**: `any` = `undefined`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:832](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L832)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### state

• `get` **state**(): [`ShaderControlMap`](../modules/neuroglancer_webgl_shader_ui_controls.md#shadercontrolmap)

#### Returns

[`ShaderControlMap`](../modules/neuroglancer_webgl_shader_ui_controls.md#shadercontrolmap)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:821](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L821)

___

### value

• `get` **value**(): [`ShaderControlMap`](../modules/neuroglancer_webgl_shader_ui_controls.md#shadercontrolmap)

#### Returns

[`ShaderControlMap`](../modules/neuroglancer_webgl_shader_ui_controls.md#shadercontrolmap)

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:828](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L828)

## Methods

### addRef

▸ **addRef**(): [`ShaderControlState`](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md)

#### Returns

[`ShaderControlState`](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### handleControlsChanged

▸ `Private` **handleControlsChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:765](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L765)

___

### handleFragmentMainChanged

▸ `Private` **handleFragmentMainChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:733](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L733)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[reset](../interfaces/neuroglancer_util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:858](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L858)

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

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[restoreState](../interfaces/neuroglancer_util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:834](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L834)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[toJSON](../interfaces/neuroglancer_util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:868](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_ui_controls.ts#L868)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
