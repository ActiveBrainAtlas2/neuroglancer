[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/services/firebase](../modules/neuroglancer_services_firebase.md) / [<internal\>](../modules/neuroglancer_services_firebase._internal_.md) / Query

# Interface: Query

[neuroglancer/services/firebase](../modules/neuroglancer_services_firebase.md).[<internal>](../modules/neuroglancer_services_firebase._internal_.md).Query

A `Query` sorts and filters the data at a Database location so only a subset
of the child data is included. This can be used to order a collection of
data by some attribute (for example, height of dinosaurs) as well as to
restrict a large list of items (for example, chat messages) down to a number
suitable for synchronizing to the client. Queries are created by chaining
together one or more of the filter methods defined here.

Just as with a `DatabaseReference`, you can receive data from a `Query` by using the
`on*()` methods. You will only receive events and `DataSnapshot`s for the
subset of the data that matches your query.

See [https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data](https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data)
for more information.

## Hierarchy

- **`Query`**

  ↳ [`DatabaseReference`](neuroglancer_services_firebase._internal_.DatabaseReference.md)

## Table of contents

### Properties

- [ref](neuroglancer_services_firebase._internal_.Query.md#ref)

### Methods

- [isEqual](neuroglancer_services_firebase._internal_.Query.md#isequal)
- [toJSON](neuroglancer_services_firebase._internal_.Query.md#tojson)
- [toString](neuroglancer_services_firebase._internal_.Query.md#tostring)

## Properties

### ref

• `Readonly` **ref**: [`DatabaseReference`](neuroglancer_services_firebase._internal_.DatabaseReference.md)

The `DatabaseReference` for the `Query`'s location.

#### Defined in

node_modules/@firebase/database/dist/public.d.ts:1051

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
| `other` | ``null`` \| [`Query`](neuroglancer_services_firebase._internal_.Query.md) | The query to compare against. |

#### Returns

`boolean`

Whether or not the current and provided queries are equivalent.

#### Defined in

node_modules/@firebase/database/dist/public.d.ts:1068

___

### toJSON

▸ **toJSON**(): `string`

Returns a JSON-serializable representation of this object.

#### Returns

`string`

A JSON-serializable representation of this object.

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

#### Defined in

node_modules/@firebase/database/dist/public.d.ts:1088
