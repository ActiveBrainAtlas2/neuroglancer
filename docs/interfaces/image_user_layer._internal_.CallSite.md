[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / CallSite

# Interface: CallSite

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).CallSite

## Table of contents

### Methods

- [getColumnNumber](image_user_layer._internal_.CallSite.md#getcolumnnumber)
- [getEvalOrigin](image_user_layer._internal_.CallSite.md#getevalorigin)
- [getFileName](image_user_layer._internal_.CallSite.md#getfilename)
- [getFunction](image_user_layer._internal_.CallSite.md#getfunction)
- [getFunctionName](image_user_layer._internal_.CallSite.md#getfunctionname)
- [getLineNumber](image_user_layer._internal_.CallSite.md#getlinenumber)
- [getMethodName](image_user_layer._internal_.CallSite.md#getmethodname)
- [getThis](image_user_layer._internal_.CallSite.md#getthis)
- [getTypeName](image_user_layer._internal_.CallSite.md#gettypename)
- [isConstructor](image_user_layer._internal_.CallSite.md#isconstructor)
- [isEval](image_user_layer._internal_.CallSite.md#iseval)
- [isNative](image_user_layer._internal_.CallSite.md#isnative)
- [isToplevel](image_user_layer._internal_.CallSite.md#istoplevel)

## Methods

### getColumnNumber

▸ **getColumnNumber**(): ``null`` \| `number`

Current column number [if this function was defined in a script]

#### Returns

``null`` \| `number`

#### Defined in

node_modules/@types/node/globals.d.ts:445

___

### getEvalOrigin

▸ **getEvalOrigin**(): `undefined` \| `string`

A call site object representing the location where eval was called
[if this function was created using a call to eval]

#### Returns

`undefined` \| `string`

#### Defined in

node_modules/@types/node/globals.d.ts:451

___

### getFileName

▸ **getFileName**(): ``null`` \| `string`

Name of the script [if this function was defined in a script]

#### Returns

``null`` \| `string`

#### Defined in

node_modules/@types/node/globals.d.ts:435

___

### getFunction

▸ **getFunction**(): `undefined` \| `Function`

Current function

#### Returns

`undefined` \| `Function`

#### Defined in

node_modules/@types/node/globals.d.ts:417

___

### getFunctionName

▸ **getFunctionName**(): ``null`` \| `string`

Name of the current function, typically its name property.
If a name property is not available an attempt will be made to try
to infer a name from the function's context.

#### Returns

``null`` \| `string`

#### Defined in

node_modules/@types/node/globals.d.ts:424

___

### getLineNumber

▸ **getLineNumber**(): ``null`` \| `number`

Current line number [if this function was defined in a script]

#### Returns

``null`` \| `number`

#### Defined in

node_modules/@types/node/globals.d.ts:440

___

### getMethodName

▸ **getMethodName**(): ``null`` \| `string`

Name of the property [of "this" or one of its prototypes] that holds
the current function

#### Returns

``null`` \| `string`

#### Defined in

node_modules/@types/node/globals.d.ts:430

___

### getThis

▸ **getThis**(): `any`

Value of "this"

#### Returns

`any`

#### Defined in

node_modules/@types/node/globals.d.ts:404

___

### getTypeName

▸ **getTypeName**(): ``null`` \| `string`

Type of "this" as a string.
This is the name of the function stored in the constructor field of
"this", if available.  Otherwise the object's [[Class]] internal
property.

#### Returns

``null`` \| `string`

#### Defined in

node_modules/@types/node/globals.d.ts:412

___

### isConstructor

▸ **isConstructor**(): `boolean`

Is this a constructor call?

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:471

___

### isEval

▸ **isEval**(): `boolean`

Does this call take place in code defined by a call to eval?

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:461

___

### isNative

▸ **isNative**(): `boolean`

Is this call in native V8 code?

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:466

___

### isToplevel

▸ **isToplevel**(): `boolean`

Is this a toplevel invocation, that is, is "this" the global object?

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:456
