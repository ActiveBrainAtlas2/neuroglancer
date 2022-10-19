[neuroglancer](../README.md) / [Modules](../modules.md) / [services/firebase](../modules/services_firebase.md) / [<internal\>](../modules/services_firebase._internal_.md) / FirebaseOptions

# Interface: FirebaseOptions

[services/firebase](../modules/services_firebase.md).[<internal>](../modules/services_firebase._internal_.md).FirebaseOptions

## Table of contents

### Properties

- [apiKey](services_firebase._internal_.FirebaseOptions.md#apikey)
- [appId](services_firebase._internal_.FirebaseOptions.md#appid)
- [authDomain](services_firebase._internal_.FirebaseOptions.md#authdomain)
- [databaseURL](services_firebase._internal_.FirebaseOptions.md#databaseurl)
- [measurementId](services_firebase._internal_.FirebaseOptions.md#measurementid)
- [messagingSenderId](services_firebase._internal_.FirebaseOptions.md#messagingsenderid)
- [projectId](services_firebase._internal_.FirebaseOptions.md#projectid)
- [storageBucket](services_firebase._internal_.FirebaseOptions.md#storagebucket)

## Properties

### apiKey

• `Optional` **apiKey**: `string`

An encrypted string used when calling certain APIs that don't need to
access private user data
(example value: `AIzaSyDOCAbC123dEf456GhI789jKl012-MnO`).

#### Defined in

node_modules/@firebase/app/dist/app-public.d.ts:131

___

### appId

• `Optional` **appId**: `string`

Unique identifier for the app.

#### Defined in

node_modules/@firebase/app/dist/app-public.d.ts:157

___

### authDomain

• `Optional` **authDomain**: `string`

Auth domain for the project ID.

#### Defined in

node_modules/@firebase/app/dist/app-public.d.ts:135

___

### databaseURL

• `Optional` **databaseURL**: `string`

Default Realtime Database URL.

#### Defined in

node_modules/@firebase/app/dist/app-public.d.ts:139

___

### measurementId

• `Optional` **measurementId**: `string`

An ID automatically created when you enable Analytics in your
Firebase project and register a web app. In versions 7.20.0
and higher, this parameter is optional.

#### Defined in

node_modules/@firebase/app/dist/app-public.d.ts:163

___

### messagingSenderId

• `Optional` **messagingSenderId**: `string`

Unique numerical value used to identify each sender that can send
Firebse Cloud Messaging messages to client apps.

#### Defined in

node_modules/@firebase/app/dist/app-public.d.ts:153

___

### projectId

• `Optional` **projectId**: `string`

The unique identifier for the project across all of Firebase and
Google Cloud.

#### Defined in

node_modules/@firebase/app/dist/app-public.d.ts:144

___

### storageBucket

• `Optional` **storageBucket**: `string`

The default Cloud Storage bucket name.

#### Defined in

node_modules/@firebase/app/dist/app-public.d.ts:148
