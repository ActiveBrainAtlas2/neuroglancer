[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/perspective\_view/panel

# Module: neuroglancer/perspective\_view/panel

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_perspective_view_panel._internal_.md)

### Enumerations

- [OffscreenTextures](../enums/neuroglancer_perspective_view_panel.OffscreenTextures.md)

### Classes

- [PerspectivePanel](../classes/neuroglancer_perspective_view_panel.PerspectivePanel.md)

### Interfaces

- [PerspectiveViewerState](../interfaces/neuroglancer_perspective_view_panel.PerspectiveViewerState.md)

### Variables

- [glsl\_computeOITWeight](neuroglancer_perspective_view_panel.md#glsl_computeoitweight)
- [glsl\_perspectivePanelEmit](neuroglancer_perspective_view_panel.md#glsl_perspectivepanelemit)
- [glsl\_perspectivePanelEmitOIT](neuroglancer_perspective_view_panel.md#glsl_perspectivepanelemitoit)

### Functions

- [perspectivePanelEmit](neuroglancer_perspective_view_panel.md#perspectivepanelemit)
- [perspectivePanelEmitOIT](neuroglancer_perspective_view_panel.md#perspectivepanelemitoit)

## Variables

### glsl\_computeOITWeight

• `Const` **glsl\_computeOITWeight**: ``"\nfloat computeOITWeight(float alpha) {\n  float a = min(1.0, alpha) * 8.0 + 0.01;\n  float b = -gl_FragCoord.z * 0.95 + 1.0;\n  return a * a * a * b * b * b;\n}\n"``

http://jcgt.org/published/0002/02/09/paper.pdf
http://casual-effects.blogspot.com/2015/03/implemented-weighted-blended-order.html

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/perspective_view/panel.ts#L77)

___

### glsl\_perspectivePanelEmit

• `Const` **glsl\_perspectivePanelEmit**: ``"\nvoid emit(vec4 color, highp uint pickId) {\n  out_color = color;\n  float zValue = 1.0 - gl_FragCoord.z;\n  out_z = vec4(zValue, zValue, zValue, 1.0);\n  float pickIdFloat = float(pickId);\n  out_pickId = vec4(pickIdFloat, pickIdFloat, pickIdFloat, 1.0);\n}\n"``

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/perspective_view/panel.ts#L63)

___

### glsl\_perspectivePanelEmitOIT

• `Const` **glsl\_perspectivePanelEmitOIT**: `string`[]

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/perspective_view/panel.ts#L86)

## Functions

### perspectivePanelEmit

▸ **perspectivePanelEmit**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/perspective_view/panel.ts#L97)

___

### perspectivePanelEmitOIT

▸ **perspectivePanelEmitOIT**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/perspective_view/panel.ts#L104)
