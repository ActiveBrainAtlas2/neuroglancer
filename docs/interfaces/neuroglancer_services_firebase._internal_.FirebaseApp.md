[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/services/firebase](../modules/neuroglancer_services_firebase.md) / [<internal\>](../modules/neuroglancer_services_firebase._internal_.md) / FirebaseApp

# Interface: FirebaseApp

[neuroglancer/services/firebase](../modules/neuroglancer_services_firebase.md).[<internal>](../modules/neuroglancer_services_firebase._internal_.md).FirebaseApp

A {@link @firebase/app#FirebaseApp} holds the initialization information for a collection of
services.

Do not call this constructor directly. Instead, use
{@link (initializeApp:1) | initializeApp()} to create an app.

## Table of contents

### Properties

- [automaticDataCollectionEnabled](neuroglancer_services_firebase._internal_.FirebaseApp.md#automaticdatacollectionenabled)
- [name](neuroglancer_services_firebase._internal_.FirebaseApp.md#name)
- [options](neuroglancer_services_firebase._internal_.FirebaseApp.md#options)

## Properties

### automaticDataCollectionEnabled

• **automaticDataCollectionEnabled**: `boolean`

The settable config flag for GDPR opt-in/opt-out

#### Defined in

node_modules/@firebase/app/dist/app-public.d.ts:92

___

### name

• `Readonly` **name**: `string`

The (read-only) name for this app.

The default app's name is `"[DEFAULT]"`.

**`example`**
```javascript
// The default app's name is "[DEFAULT]"
const app = initializeApp(defaultAppConfig);
console.log(app.name);  // "[DEFAULT]"
```

**`example`**
```javascript
// A named app's name is what you provide to initializeApp()
const otherApp = initializeApp(otherAppConfig, "other");
console.log(otherApp.name);  // "other"
```

#### Defined in

node_modules/@firebase/app/dist/app-public.d.ts:77

___

### options

• `Readonly` **options**: [`FirebaseOptions`](neuroglancer_services_firebase._internal_.FirebaseOptions.md)

The (read-only) configuration options for this app. These are the original
parameters given in {@link (initializeApp:1) | initializeApp()}.

**`example`**
```javascript
const app = initializeApp(config);
console.log(app.options.databaseURL === config.databaseURL);  // true
```

#### Defined in

node_modules/@firebase/app/dist/app-public.d.ts:88
