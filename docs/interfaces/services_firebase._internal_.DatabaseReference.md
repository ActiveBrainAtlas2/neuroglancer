[neuroglancer](../README.md) / [Modules](../modules.md) / [services/firebase](../modules/services_firebase.md) / [<internal\>](../modules/services_firebase._internal_.md) / DatabaseReference

# Interface: DatabaseReference

[services/firebase](../modules/services_firebase.md).[<internal>](../modules/services_firebase._internal_.md).DatabaseReference

A `DatabaseReference` represents a specific location in your Database and can be used
for reading or writing data to that Database location.

You can reference the root or child location in your Database by calling
`ref()` or `ref("child/path")`.

Writing is done with the `set()` method and reading can be done with the
`on*()` method. See [https://firebase.google.com/docs/database/web/read-and-write](https://firebase.google.com/docs/database/web/read-and-write)

## Hierarchy

- [`Query`](services_firebase._internal_.Query.md)

  ↳ **`DatabaseReference`**

## Table of contents

### Properties

- [key](services_firebase._internal_.DatabaseReference.md#key)
- [parent](services_firebase._internal_.DatabaseReference.md#parent)
- [ref](services_firebase._internal_.DatabaseReference.md#ref)
- [root](services_firebase._internal_.DatabaseReference.md#root)

### Methods

- [isEqual](services_firebase._internal_.DatabaseReference.md#isequal)
- [toJSON](services_firebase._internal_.DatabaseReference.md#tojson)
- [toString](services_firebase._internal_.DatabaseReference.md#tostring)

## Properties

### key

• `Readonly` **key**: ``null`` \| `string`

The last part of the `DatabaseReference`'s path.

For example, `"ada"` is the key for
`https://<DATABASE_NAME>.firebaseio.com/users/ada`.

The key of a root `DatabaseReference` is `null`.

#### Defined in

node_modules/@firebase/database/dist/public.d.ts:65

___

### parent

• `Readonly` **parent**: ``null`` \| [`DatabaseReference`](services_firebase._internal_.DatabaseReference.md)

The parent location of a `DatabaseReference`.

The parent of a root `DatabaseReference` is `null`.

#### Defined in

node_modules/@firebase/database/dist/public.d.ts:71

___

### ref

• `Readonly` **ref**: [`DatabaseReference`](services_firebase._internal_.DatabaseReference.md)

The `DatabaseReference` for the `Query`'s location.

#### Inherited from

[Query](services_firebase._internal_.Query.md).[ref](services_firebase._internal_.Query.md#ref)

#### Defined in

node_modules/@firebase/database/dist/public.d.ts:1051

___

### root

• `Readonly` **root**: [`DatabaseReference`](services_firebase._internal_.DatabaseReference.md)

The root `DatabaseReference` of the Database.

#### Defined in

node_modules/@firebase/database/dist/public.d.ts:73

## Methods

### isEqual

▸ **isEqual**(`other`): `boolean`

Returns whether or not the current and provided queries represent the same
location, have the same query parameters, and are from the same instance of
`FirebaseApp`.

Two `DatabaseReference` objects are equivalent if they represent the same location
and are from the same instance of `FirebaseApp`.

Two `Query` objects are equivalent if they represent the same location,
have the same query parameters, and are from the same instance of
`FirebaseApp`. Equivalent queries share the same sort order, limits, and
starting and ending points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | ``null`` \| [`Query`](services_firebase._internal_.Query.md) | The query to compare against. |

#### Returns

`boolean`

Whether or not the current and provided queries are equivalent.

#### Inherited from

[Query](services_firebase._internal_.Query.md).[isEqual](services_firebase._internal_.Query.md#isequal)

#### Defined in

node_modules/@firebase/database/dist/public.d.ts:1068

___

### toJSON

▸ **toJSON**(): `string`

Returns a JSON-serializable representation of this object.

#### Returns

`string`

A JSON-serializable representation of this object.

#### Inherited from

[Query](services_firebase._internal_.Query.md).[toJSON](services_firebase._internal_.Query.md#tojson)

#### Defined in

node_modules/@firebase/database/dist/public.d.ts:1074

___

### toString

▸ **toString**(): `string`

Gets the absolute URL for this location.

The `toString()` method returns a URL that is ready to be put into a
browser, curl command, or a `refFromURL()` call. Since all of those expect
the URL to be url-encoded, `toString()` returns an encoded URL.

Append '.json' to the returned URL when typed into a browser to download
JSON-formatted data. If the location is secured (that is, not publicly
readable), you will get a permission-denied error.

#### Returns

`string`

The absolute URL for this location.

#### Inherited from

[Query](services_firebase._internal_.Query.md).[toString](services_firebase._internal_.Query.md#tostring)

#### Defined in

node_modules/@firebase/database/dist/public.d.ts:1088
