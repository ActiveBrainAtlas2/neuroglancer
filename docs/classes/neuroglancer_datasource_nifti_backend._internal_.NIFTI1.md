[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/nifti/backend](../modules/neuroglancer_datasource_nifti_backend.md) / [<internal\>](../modules/neuroglancer_datasource_nifti_backend._internal_.md) / NIFTI1

# Class: NIFTI1

[neuroglancer/datasource/nifti/backend](../modules/neuroglancer_datasource_nifti_backend.md).[<internal>](../modules/neuroglancer_datasource_nifti_backend._internal_.md).NIFTI1

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#constructor)

### Properties

- [affine](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#affine)
- [aux\_file](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#aux_file)
- [cal\_max](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#cal_max)
- [cal\_min](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#cal_min)
- [datatypeCode](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#datatypecode)
- [description](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#description)
- [dim\_info](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#dim_info)
- [dims](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#dims)
- [extensionCode](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#extensioncode)
- [extensionFlag](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#extensionflag)
- [extensionSize](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#extensionsize)
- [intent\_code](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#intent_code)
- [intent\_name](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#intent_name)
- [intent\_p1](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#intent_p1)
- [intent\_p2](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#intent_p2)
- [intent\_p3](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#intent_p3)
- [isHDR](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#ishdr)
- [littleEndian](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#littleendian)
- [magic](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#magic)
- [numBitsPerVoxel](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#numbitspervoxel)
- [pixDims](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#pixdims)
- [qform\_code](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#qform_code)
- [qoffset\_x](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#qoffset_x)
- [qoffset\_y](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#qoffset_y)
- [qoffset\_z](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#qoffset_z)
- [quatern\_b](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#quatern_b)
- [quatern\_c](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#quatern_c)
- [quatern\_d](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#quatern_d)
- [scl\_inter](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#scl_inter)
- [scl\_slope](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#scl_slope)
- [sform\_code](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#sform_code)
- [slice\_code](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#slice_code)
- [slice\_duration](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#slice_duration)
- [slice\_end](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#slice_end)
- [slice\_start](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#slice_start)
- [tooffset](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#tooffset)
- [vox\_offset](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#vox_offset)
- [xyzt\_units](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#xyzt_units)
- [SPATIAL\_UNITS\_MASK](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#spatial_units_mask)
- [TEMPORAL\_UNITS\_MASK](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#temporal_units_mask)
- [TYPE\_BINARY](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_binary)
- [TYPE\_COMPLEX128](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_complex128)
- [TYPE\_COMPLEX256](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_complex256)
- [TYPE\_COMPLEX64](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_complex64)
- [TYPE\_FLOAT128](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_float128)
- [TYPE\_FLOAT32](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_float32)
- [TYPE\_FLOAT64](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_float64)
- [TYPE\_INT16](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_int16)
- [TYPE\_INT32](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_int32)
- [TYPE\_INT64](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_int64)
- [TYPE\_INT8](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_int8)
- [TYPE\_NONE](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_none)
- [TYPE\_RGB24](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_rgb24)
- [TYPE\_UINT16](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_uint16)
- [TYPE\_UINT32](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_uint32)
- [TYPE\_UINT64](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_uint64)
- [TYPE\_UINT8](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#type_uint8)
- [UNITS\_HZ](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#units_hz)
- [UNITS\_METER](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#units_meter)
- [UNITS\_MICRON](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#units_micron)
- [UNITS\_MM](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#units_mm)
- [UNITS\_MSEC](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#units_msec)
- [UNITS\_PPM](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#units_ppm)
- [UNITS\_RADS](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#units_rads)
- [UNITS\_SEC](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#units_sec)
- [UNITS\_UNKNOWN](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#units_unknown)
- [UNITS\_USEC](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#units_usec)
- [XFORM\_ALIGNED\_ANAT](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#xform_aligned_anat)
- [XFORM\_MNI\_152](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#xform_mni_152)
- [XFORM\_SCANNER\_ANAT](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#xform_scanner_anat)
- [XFORM\_TALAIRACH](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#xform_talairach)
- [XFORM\_UNKNOWN](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#xform_unknown)

### Methods

- [convertNiftiQFormToNiftiSForm](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#convertniftiqformtoniftisform)
- [convertNiftiSFormToNEMA](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#convertniftisformtonema)
- [getDatatypeCodeString](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#getdatatypecodestring)
- [getExtensionCode](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#getextensioncode)
- [getExtensionLocation](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#getextensionlocation)
- [getExtensionSize](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#getextensionsize)
- [getQformMat](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#getqformmat)
- [getTransformCodeString](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#gettransformcodestring)
- [getUnitsCodeString](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#getunitscodestring)
- [readHeader](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#readheader)
- [toFormattedString](neuroglancer_datasource_nifti_backend._internal_.NIFTI1.md#toformattedstring)

## Constructors

### constructor

• **new NIFTI1**()

## Properties

### affine

• **affine**: `number`[][]

#### Defined in

[typings/nifti-reader-js.d.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L99)

___

### aux\_file

• **aux\_file**: `string`

#### Defined in

[typings/nifti-reader-js.d.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L89)

___

### cal\_max

• **cal\_max**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L84)

___

### cal\_min

• **cal\_min**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L85)

___

### datatypeCode

• **datatypeCode**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L74)

___

### description

• **description**: `string`

#### Defined in

[typings/nifti-reader-js.d.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L88)

___

### dim\_info

• **dim\_info**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L68)

___

### dims

• **dims**: `number`[]

#### Defined in

[typings/nifti-reader-js.d.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L69)

___

### extensionCode

• **extensionCode**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L109)

___

### extensionFlag

• **extensionFlag**: `number`[]

#### Defined in

[typings/nifti-reader-js.d.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L107)

___

### extensionSize

• **extensionSize**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L108)

___

### intent\_code

• **intent\_code**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L73)

___

### intent\_name

• **intent\_name**: `string`

#### Defined in

[typings/nifti-reader-js.d.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L90)

___

### intent\_p1

• **intent\_p1**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L70)

___

### intent\_p2

• **intent\_p2**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L71)

___

### intent\_p3

• **intent\_p3**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L72)

___

### isHDR

• **isHDR**: `boolean`

Indicates if hdr/img format.

#### Defined in

[typings/nifti-reader-js.d.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L105)

___

### littleEndian

• **littleEndian**: `boolean`

#### Defined in

[typings/nifti-reader-js.d.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L67)

___

### magic

• **magic**: `string`

#### Defined in

[typings/nifti-reader-js.d.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L100)

___

### numBitsPerVoxel

• **numBitsPerVoxel**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L75)

___

### pixDims

• **pixDims**: `number`[]

#### Defined in

[typings/nifti-reader-js.d.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L79)

___

### qform\_code

• **qform\_code**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L91)

___

### qoffset\_x

• **qoffset\_x**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L96)

___

### qoffset\_y

• **qoffset\_y**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L97)

___

### qoffset\_z

• **qoffset\_z**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L98)

___

### quatern\_b

• **quatern\_b**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L93)

___

### quatern\_c

• **quatern\_c**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L94)

___

### quatern\_d

• **quatern\_d**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L95)

___

### scl\_inter

• **scl\_inter**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L82)

___

### scl\_slope

• **scl\_slope**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L81)

___

### sform\_code

• **sform\_code**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L92)

___

### slice\_code

• **slice\_code**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L78)

___

### slice\_duration

• **slice\_duration**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L86)

___

### slice\_end

• **slice\_end**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L77)

___

### slice\_start

• **slice\_start**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L76)

___

### tooffset

• **tooffset**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L87)

___

### vox\_offset

• **vox\_offset**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L80)

___

### xyzt\_units

• **xyzt\_units**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L83)

___

### SPATIAL\_UNITS\_MASK

▪ `Static` **SPATIAL\_UNITS\_MASK**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L52)

___

### TEMPORAL\_UNITS\_MASK

▪ `Static` **TEMPORAL\_UNITS\_MASK**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L53)

___

### TYPE\_BINARY

▪ `Static` **TYPE\_BINARY**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L26)

___

### TYPE\_COMPLEX128

▪ `Static` **TYPE\_COMPLEX128**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L40)

___

### TYPE\_COMPLEX256

▪ `Static` **TYPE\_COMPLEX256**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L41)

___

### TYPE\_COMPLEX64

▪ `Static` **TYPE\_COMPLEX64**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L31)

___

### TYPE\_FLOAT128

▪ `Static` **TYPE\_FLOAT128**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L39)

___

### TYPE\_FLOAT32

▪ `Static` **TYPE\_FLOAT32**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L30)

___

### TYPE\_FLOAT64

▪ `Static` **TYPE\_FLOAT64**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L32)

___

### TYPE\_INT16

▪ `Static` **TYPE\_INT16**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L28)

___

### TYPE\_INT32

▪ `Static` **TYPE\_INT32**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L29)

___

### TYPE\_INT64

▪ `Static` **TYPE\_INT64**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L37)

___

### TYPE\_INT8

▪ `Static` **TYPE\_INT8**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L34)

___

### TYPE\_NONE

▪ `Static` **TYPE\_NONE**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L25)

___

### TYPE\_RGB24

▪ `Static` **TYPE\_RGB24**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L33)

___

### TYPE\_UINT16

▪ `Static` **TYPE\_UINT16**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L35)

___

### TYPE\_UINT32

▪ `Static` **TYPE\_UINT32**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L36)

___

### TYPE\_UINT64

▪ `Static` **TYPE\_UINT64**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L38)

___

### TYPE\_UINT8

▪ `Static` **TYPE\_UINT8**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L27)

___

### UNITS\_HZ

▪ `Static` **UNITS\_HZ**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L61)

___

### UNITS\_METER

▪ `Static` **UNITS\_METER**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L55)

___

### UNITS\_MICRON

▪ `Static` **UNITS\_MICRON**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L57)

___

### UNITS\_MM

▪ `Static` **UNITS\_MM**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L56)

___

### UNITS\_MSEC

▪ `Static` **UNITS\_MSEC**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L59)

___

### UNITS\_PPM

▪ `Static` **UNITS\_PPM**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L62)

___

### UNITS\_RADS

▪ `Static` **UNITS\_RADS**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L63)

___

### UNITS\_SEC

▪ `Static` **UNITS\_SEC**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L58)

___

### UNITS\_UNKNOWN

▪ `Static` **UNITS\_UNKNOWN**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L54)

___

### UNITS\_USEC

▪ `Static` **UNITS\_USEC**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L60)

___

### XFORM\_ALIGNED\_ANAT

▪ `Static` **XFORM\_ALIGNED\_ANAT**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L47)

___

### XFORM\_MNI\_152

▪ `Static` **XFORM\_MNI\_152**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L49)

___

### XFORM\_SCANNER\_ANAT

▪ `Static` **XFORM\_SCANNER\_ANAT**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L46)

___

### XFORM\_TALAIRACH

▪ `Static` **XFORM\_TALAIRACH**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L48)

___

### XFORM\_UNKNOWN

▪ `Static` **XFORM\_UNKNOWN**: `number`

#### Defined in

[typings/nifti-reader-js.d.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L45)

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

[typings/nifti-reader-js.d.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L145)

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

[typings/nifti-reader-js.d.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L153)

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

[typings/nifti-reader-js.d.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L124)

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

[typings/nifti-reader-js.d.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L168)

___

### getExtensionLocation

▸ **getExtensionLocation**(): `number`

Returns the byte index of the extension.

#### Returns

`number`

#### Defined in

[typings/nifti-reader-js.d.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L158)

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

[typings/nifti-reader-js.d.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L163)

___

### getQformMat

▸ **getQformMat**(): `number`[][]

Returns the qform matrix.

#### Returns

`number`[][]

#### Defined in

[typings/nifti-reader-js.d.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L139)

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

[typings/nifti-reader-js.d.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L129)

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

[typings/nifti-reader-js.d.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L134)

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

[typings/nifti-reader-js.d.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L114)

___

### toFormattedString

▸ **toFormattedString**(): `string`

Returns a formatted string of header fields.

#### Returns

`string`

#### Defined in

[typings/nifti-reader-js.d.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/typings/nifti-reader-js.d.ts#L119)
