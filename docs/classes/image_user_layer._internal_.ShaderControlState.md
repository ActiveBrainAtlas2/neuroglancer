[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / ShaderControlState

# Class: ShaderControlState

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).ShaderControlState

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`ShaderControlState`**

## Implements

- [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)
- [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`ShaderControlMap`](../modules/image_user_layer._internal_.md#shadercontrolmap)\>

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.ShaderControlState.md#constructor)

### Properties

- [builderState](image_user_layer._internal_.ShaderControlState.md#builderstate)
- [changed](image_user_layer._internal_.ShaderControlState.md#changed)
- [channelCoordinateSpaceCombiner](image_user_layer._internal_.ShaderControlState.md#channelcoordinatespacecombiner)
- [controls](image_user_layer._internal_.ShaderControlState.md#controls)
- [controlsGeneration](image_user_layer._internal_.ShaderControlState.md#controlsgeneration)
- [dataContext](image_user_layer._internal_.ShaderControlState.md#datacontext)
- [dataContextGeneration](image_user_layer._internal_.ShaderControlState.md#datacontextgeneration)
- [disposedStacks](image_user_layer._internal_.ShaderControlState.md#disposedstacks)
- [fragmentMain](image_user_layer._internal_.ShaderControlState.md#fragmentmain)
- [fragmentMainGeneration](image_user_layer._internal_.ShaderControlState.md#fragmentmaingeneration)
- [histogramSpecifications](image_user_layer._internal_.ShaderControlState.md#histogramspecifications)
- [parseErrors](image_user_layer._internal_.ShaderControlState.md#parseerrors)
- [parseErrors\_](image_user_layer._internal_.ShaderControlState.md#parseerrors_)
- [parseResult](image_user_layer._internal_.ShaderControlState.md#parseresult)
- [parseResultChanged](image_user_layer._internal_.ShaderControlState.md#parseresultchanged)
- [parseResult\_](image_user_layer._internal_.ShaderControlState.md#parseresult_)
- [processedFragmentMain](image_user_layer._internal_.ShaderControlState.md#processedfragmentmain)
- [processedFragmentMain\_](image_user_layer._internal_.ShaderControlState.md#processedfragmentmain_)
- [refCount](image_user_layer._internal_.ShaderControlState.md#refcount)
- [state\_](image_user_layer._internal_.ShaderControlState.md#state_)
- [unparsedJson](image_user_layer._internal_.ShaderControlState.md#unparsedjson)
- [wasDisposed](image_user_layer._internal_.ShaderControlState.md#wasdisposed)

### Accessors

- [state](image_user_layer._internal_.ShaderControlState.md#state)
- [value](image_user_layer._internal_.ShaderControlState.md#value)

### Methods

- [addRef](image_user_layer._internal_.ShaderControlState.md#addref)
- [dispose](image_user_layer._internal_.ShaderControlState.md#dispose)
- [disposed](image_user_layer._internal_.ShaderControlState.md#disposed)
- [handleControlsChanged](image_user_layer._internal_.ShaderControlState.md#handlecontrolschanged)
- [handleFragmentMainChanged](image_user_layer._internal_.ShaderControlState.md#handlefragmentmainchanged)
- [refCountReachedZero](image_user_layer._internal_.ShaderControlState.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.ShaderControlState.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.ShaderControlState.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.ShaderControlState.md#registereventlistener)
- [reset](image_user_layer._internal_.ShaderControlState.md#reset)
- [restoreState](image_user_layer._internal_.ShaderControlState.md#restorestate)
- [toJSON](image_user_layer._internal_.ShaderControlState.md#tojson)
- [unregisterDisposer](image_user_layer._internal_.ShaderControlState.md#unregisterdisposer)

## Constructors

### constructor

• **new ShaderControlState**(`fragmentMain`, `dataContext?`, `channelCoordinateSpaceCombiner?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragmentMain` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`string`\> |
| `dataContext` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<``null`` \| [`ShaderDataContext`](../interfaces/image_user_layer._internal_.ShaderDataContext.md)\> |
| `channelCoordinateSpaceCombiner?` | [`CoordinateSpaceCombiner`](coordinate_transform.CoordinateSpaceCombiner.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:665](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L665)

## Properties

### builderState

• **builderState**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`ShaderControlsBuilderState`](../interfaces/image_user_layer._internal_.ShaderControlsBuilderState.md)\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:654](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L654)

___

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[changed](../interfaces/trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:649](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L649)

___

### channelCoordinateSpaceCombiner

• `Optional` **channelCoordinateSpaceCombiner**: [`CoordinateSpaceCombiner`](coordinate_transform.CoordinateSpaceCombiner.md)

___

### controls

• **controls**: [`WatchableShaderUiControls`](image_user_layer._internal_.WatchableShaderUiControls.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:650](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L650)

___

### controlsGeneration

• `Private` **controlsGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:662](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L662)

___

### dataContext

• **dataContext**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<``null`` \| [`ShaderDataContext`](../interfaces/image_user_layer._internal_.ShaderDataContext.md)\>

___

### dataContextGeneration

• `Private` **dataContextGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:658](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L658)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### fragmentMain

• **fragmentMain**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`string`\>

___

### fragmentMainGeneration

• `Private` **fragmentMainGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:657](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L657)

___

### histogramSpecifications

• **histogramSpecifications**: [`HistogramSpecifications`](data_panel_layout._internal_.HistogramSpecifications.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:655](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L655)

___

### parseErrors

• **parseErrors**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`ShaderControlParseError`](../interfaces/image_user_layer._internal_.ShaderControlParseError.md)[]\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:651](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L651)

___

### parseErrors\_

• `Private` **parseErrors\_**: [`ShaderControlParseError`](../interfaces/image_user_layer._internal_.ShaderControlParseError.md)[] = `[]`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:659](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L659)

___

### parseResult

• **parseResult**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`ShaderControlsParseResult`](../interfaces/image_user_layer._internal_.ShaderControlsParseResult.md)\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:653](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L653)

___

### parseResultChanged

• `Private` **parseResultChanged**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:663](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L663)

___

### parseResult\_

• `Private` **parseResult\_**: [`ShaderControlsParseResult`](../interfaces/image_user_layer._internal_.ShaderControlsParseResult.md)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:661](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L661)

___

### processedFragmentMain

• **processedFragmentMain**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`string`\>

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:652](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L652)

___

### processedFragmentMain\_

• `Private` **processedFragmentMain\_**: `string` = `''`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:660](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L660)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### state\_

• `Private` **state\_**: [`ShaderControlMap`](../modules/image_user_layer._internal_.md#shadercontrolmap)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:819](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L819)

___

### unparsedJson

• `Private` **unparsedJson**: `any` = `undefined`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:832](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L832)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### state

• `get` **state**(): [`ShaderControlMap`](../modules/image_user_layer._internal_.md#shadercontrolmap)

#### Returns

[`ShaderControlMap`](../modules/image_user_layer._internal_.md#shadercontrolmap)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:821](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L821)

___

### value

• `get` **value**(): [`ShaderControlMap`](../modules/image_user_layer._internal_.md#shadercontrolmap)

#### Returns

[`ShaderControlMap`](../modules/image_user_layer._internal_.md#shadercontrolmap)

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:828](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L828)

## Methods

### addRef

▸ **addRef**(): [`ShaderControlState`](image_user_layer._internal_.ShaderControlState.md)

#### Returns

[`ShaderControlState`](image_user_layer._internal_.ShaderControlState.md)

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

### handleControlsChanged

▸ `Private` **handleControlsChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:765](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L765)

___

### handleFragmentMainChanged

▸ `Private` **handleFragmentMainChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:733](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L733)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[reset](../interfaces/coordinate_transform._internal_.Trackable.md#reset)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:858](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L858)

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

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[restoreState](../interfaces/coordinate_transform._internal_.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:834](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L834)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[toJSON](../interfaces/coordinate_transform._internal_.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:868](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L868)

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
