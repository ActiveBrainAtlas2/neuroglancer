[neuroglancer](../README.md) / [Modules](../modules.md) / util/dom

# Module: util/dom

## Table of contents

### Functions

- [isInputTextTarget](util_dom.md#isinputtexttarget)
- [measureElementClone](util_dom.md#measureelementclone)
- [removeChildren](util_dom.md#removechildren)
- [removeFromParent](util_dom.md#removefromparent)
- [updateChildren](util_dom.md#updatechildren)
- [updateInputFieldWidth](util_dom.md#updateinputfieldwidth)

## Functions

### isInputTextTarget

▸ **isInputTextTarget**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | ``null`` \| [`EventTarget`](annotation_annotation_layer_state._internal_.md#eventtarget) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/dom.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/dom.ts#L62)

___

### measureElementClone

▸ **measureElementClone**(`element`): [`DOMRect`](annotation_annotation_layer_state._internal_.md#domrect)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Returns

[`DOMRect`](annotation_annotation_layer_state._internal_.md#domrect)

#### Defined in

[src/neuroglancer/util/dom.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/dom.ts#L71)

___

### removeChildren

▸ **removeChildren**(`element`): `void`

**`license`**
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

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/dom.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/dom.ts#L17)

___

### removeFromParent

▸ **removeFromParent**(`element`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/dom.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/dom.ts#L27)

___

### updateChildren

▸ **updateChildren**(`element`, `children`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](annotation_annotation_layer_state._internal_.md#htmlelement) |
| `children` | [`Iterable`](../interfaces/annotation_annotation_layer_state._internal_.Iterable.md)<[`HTMLElement`](annotation_annotation_layer_state._internal_.md#htmlelement)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/dom.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/dom.ts#L47)

___

### updateInputFieldWidth

▸ **updateInputFieldWidth**(`element`, `length?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLInputElement`](annotation_annotation_layer_state._internal_.md#htmlinputelement) |
| `length` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/dom.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/dom.ts#L36)
