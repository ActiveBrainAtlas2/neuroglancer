[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/nifti/backend](../modules/neuroglancer_datasource_nifti_backend.md) / [<internal\>](../modules/neuroglancer_datasource_nifti_backend._internal_.md) / NIFTI2

# Class: NIFTI2

[neuroglancer/datasource/nifti/backend](../modules/neuroglancer_datasource_nifti_backend.md).[<internal>](../modules/neuroglancer_datasource_nifti_backend._internal_.md).NIFTI2

Decoded NIFTI2 header.

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#constructor)

### Properties

- [affine](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#affine)
- [aux\_file](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#aux_file)
- [cal\_max](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#cal_max)
- [cal\_min](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#cal_min)
- [datatypeCode](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#datatypecode)
- [description](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#description)
- [dim\_info](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#dim_info)
- [dims](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#dims)
- [extensionFlag](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#extensionflag)
- [getQformMat](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#getqformmat)
- [intent\_code](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#intent_code)
- [intent\_name](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#intent_name)
- [intent\_p1](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#intent_p1)
- [intent\_p2](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#intent_p2)
- [intent\_p3](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#intent_p3)
- [littleEndian](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#littleendian)
- [magic](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#magic)
- [numBitsPerVoxel](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#numbitspervoxel)
- [pixDims](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#pixdims)
- [qform\_code](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#qform_code)
- [qoffset\_x](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#qoffset_x)
- [qoffset\_y](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#qoffset_y)
- [qoffset\_z](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#qoffset_z)
- [quatern\_b](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#quatern_b)
- [quatern\_c](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#quatern_c)
- [quatern\_d](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#quatern_d)
- [scl\_inter](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#scl_inter)
- [scl\_slope](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#scl_slope)
- [sform\_code](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#sform_code)
- [slice\_code](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#slice_code)
- [slice\_duration](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#slice_duration)
- [slice\_end](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#slice_end)
- [slice\_start](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#slice_start)
- [tooffset](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#tooffset)
- [vox\_offset](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#vox_offset)
- [xyzt\_units](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#xyzt_units)

### Methods

- [convertNiftiQFormToNiftiSForm](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#convertniftiqformtoniftisform)
- [convertNiftiSFormToNEMA](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#convertniftisformtonema)
- [getDatatypeCodeString](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#getdatatypecodestring)
- [getExtensionCode](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#getextensioncode)
- [getExtensionLocation](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#getextensionlocation)
- [getExtensionSize](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#getextensionsize)
- [getTransformCodeString](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#gettransformcodestring)
- [getUnitsCodeString](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#getunitscodestring)
- [readHeader](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#readheader)
- [toFormattedString](neuroglancer_datasource_nifti_backend._internal_.NIFTI2.md#toformattedstring)

## Constructors

### constructor

• **new NIFTI2**()

## Properties

### affine

• **affine**: `number`[][]

#### Defined in

[typings/nifti-reader-js.d.ts:207](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L207)

___

### aux\_file

• **aux\_file**: `string`

#### Defined in

[typings/nifti-reader-js.d.ts:197](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L197)

___

### cal\_max

• **cal\_max**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L192)

___

### cal\_min

• **cal\_min**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L193)

___

### datatypeCode

• **datatypeCode**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L182)

___

### description

• **description**: `string`

#### Defined in

[typings/nifti-reader-js.d.ts:196](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L196)

___

### dim\_info

• **dim\_info**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L176)

___

### dims

• **dims**: `number`[]

#### Defined in

[typings/nifti-reader-js.d.ts:177](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L177)

___

### extensionFlag

• **extensionFlag**: `number`[]

#### Defined in

[typings/nifti-reader-js.d.ts:209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L209)

___

### getQformMat

• **getQformMat**: `any`

Returns the qform matrix.

#### Defined in

[typings/nifti-reader-js.d.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L254)

___

### intent\_code

• **intent\_code**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L181)

___

### intent\_name

• **intent\_name**: `string`

#### Defined in

[typings/nifti-reader-js.d.ts:198](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L198)

___

### intent\_p1

• **intent\_p1**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:178](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L178)

___

### intent\_p2

• **intent\_p2**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:179](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L179)

___

### intent\_p3

• **intent\_p3**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L180)

___

### littleEndian

• **littleEndian**: `boolean`

#### Defined in

[typings/nifti-reader-js.d.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L175)

___

### magic

• **magic**: `string`

#### Defined in

[typings/nifti-reader-js.d.ts:208](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L208)

___

### numBitsPerVoxel

• **numBitsPerVoxel**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L183)

___

### pixDims

• **pixDims**: `number`[]

#### Defined in

[typings/nifti-reader-js.d.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L187)

___

### qform\_code

• **qform\_code**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L199)

___

### qoffset\_x

• **qoffset\_x**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:204](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L204)

___

### qoffset\_y

• **qoffset\_y**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:205](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L205)

___

### qoffset\_z

• **qoffset\_z**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:206](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L206)

___

### quatern\_b

• **quatern\_b**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L201)

___

### quatern\_c

• **quatern\_c**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L202)

___

### quatern\_d

• **quatern\_d**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L203)

___

### scl\_inter

• **scl\_inter**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L190)

___

### scl\_slope

• **scl\_slope**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:189](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L189)

___

### sform\_code

• **sform\_code**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:200](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L200)

___

### slice\_code

• **slice\_code**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L186)

___

### slice\_duration

• **slice\_duration**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:194](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L194)

___

### slice\_end

• **slice\_end**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:185](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L185)

___

### slice\_start

• **slice\_start**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L184)

___

### tooffset

• **tooffset**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L195)

___

### vox\_offset

• **vox\_offset**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:188](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L188)

___

### xyzt\_units

• **xyzt\_units**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L191)

## Methods

### convertNiftiQFormToNiftiSForm

▸ **convertNiftiQFormToNiftiSForm**(`qb`, `qc`, `qd`, `qx`, `qy`, `qz`, `dx`, `dy`, `dz`, `qfac`): `number`[][]

Converts qform to an affine.  (See
http://nifti.nimh.nih.gov/pub/dist/src/niftilib/nifti1_io.c)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qb` | `number` |
| `qc` | `number` |
| `qd` | `number` |
| `qx` | `number` |
| `qy` | `number` |
| `qz` | `number` |
| `dx` | `number` |
| `dy` | `number` |
| `dz` | `number` |
| `qfac` | `number` |

#### Returns

`number`[][]

#### Defined in

[typings/nifti-reader-js.d.ts:260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L260)

___

### convertNiftiSFormToNEMA

▸ **convertNiftiSFormToNEMA**(`R`): `string`

Converts sform to an orientation string (e.g., XYZ+--).  (See
http://nifti.nimh.nih.gov/pub/dist/src/niftilib/nifti1_io.c)

#### Parameters

| Name | Type |
| :------ | :------ |
| `R` | `number`[][] |

#### Returns

`string`

#### Defined in

[typings/nifti-reader-js.d.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L268)

___

### getDatatypeCodeString

▸ **getDatatypeCodeString**(`code`): `string`

Returns a human-readable string of datatype.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

`string`

#### Defined in

[typings/nifti-reader-js.d.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L239)

___

### getExtensionCode

▸ **getExtensionCode**(`data`): `number`

Returns the extension code.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `DataView` |

#### Returns

`number`

#### Defined in

[typings/nifti-reader-js.d.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L234)

___

### getExtensionLocation

▸ **getExtensionLocation**(): `number`

Returns the byte index of the extension.

#### Returns

`number`

#### Defined in

[typings/nifti-reader-js.d.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L224)

___

### getExtensionSize

▸ **getExtensionSize**(`data`): `number`

Returns the extension size.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `DataView` |

#### Returns

`number`

#### Defined in

[typings/nifti-reader-js.d.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L229)

___

### getTransformCodeString

▸ **getTransformCodeString**(`code`): `string`

Returns a human-readable string of transform type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

`string`

#### Defined in

[typings/nifti-reader-js.d.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L244)

___

### getUnitsCodeString

▸ **getUnitsCodeString**(`code`): `string`

Returns a human-readable string of spatial and temporal units.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

`string`

#### Defined in

[typings/nifti-reader-js.d.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L249)

___

### readHeader

▸ **readHeader**(`data`): `void`

Reads the header data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ArrayBuffer` |

#### Returns

`void`

#### Defined in

[typings/nifti-reader-js.d.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L214)

___

### toFormattedString

▸ **toFormattedString**(): `string`

Returns a formatted string of header fields.

#### Returns

`string`

#### Defined in

[typings/nifti-reader-js.d.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/typings/nifti-reader-js.d.ts#L219)
