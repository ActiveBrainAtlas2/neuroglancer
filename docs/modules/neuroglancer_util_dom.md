[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/dom

# Module: neuroglancer/util/dom

## Table of contents

### Functions

- [isInputTextTarget](neuroglancer_util_dom.md#isinputtexttarget)
- [measureElementClone](neuroglancer_util_dom.md#measureelementclone)
- [removeChildren](neuroglancer_util_dom.md#removechildren)
- [removeFromParent](neuroglancer_util_dom.md#removefromparent)
- [updateChildren](neuroglancer_util_dom.md#updatechildren)
- [updateInputFieldWidth](neuroglancer_util_dom.md#updateinputfieldwidth)

## Functions

### isInputTextTarget

▸ **isInputTextTarget**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | ``null`` \| [`EventTarget`](main_module._internal_.md#eventtarget) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/dom.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/dom.ts#L62)

___

### measureElementClone

▸ **measureElementClone**(`element`): [`DOMRect`](main_module._internal_.md#domrect)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](main_module._internal_.md#htmlelement) |

#### Returns

[`DOMRect`](main_module._internal_.md#domrect)

#### Defined in

[src/neuroglancer/util/dom.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/dom.ts#L71)

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
| `element` | [`HTMLElement`](main_module._internal_.md#htmlelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/dom.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/dom.ts#L17)

___

### removeFromParent

▸ **removeFromParent**(`element`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](main_module._internal_.md#htmlelement) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/dom.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/dom.ts#L27)

___

### updateChildren

▸ **updateChildren**(`element`, `children`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](main_module._internal_.md#htmlelement) |
| `children` | [`Iterable`](../interfaces/main_module._internal_.Iterable.md)<[`HTMLElement`](main_module._internal_.md#htmlelement)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/dom.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/dom.ts#L47)

___

### updateInputFieldWidth

▸ **updateInputFieldWidth**(`element`, `length?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLInputElement`](main_module._internal_.md#htmlinputelement) |
| `length` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/dom.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/dom.ts#L36)
