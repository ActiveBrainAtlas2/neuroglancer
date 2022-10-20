[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / RemotePlayback

# Interface: RemotePlayback

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).RemotePlayback

## Hierarchy

- [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

  ↳ **`RemotePlayback`**

## Table of contents

### Properties

- [onconnect](main_module._internal_.RemotePlayback.md#onconnect)
- [onconnecting](main_module._internal_.RemotePlayback.md#onconnecting)
- [ondisconnect](main_module._internal_.RemotePlayback.md#ondisconnect)
- [state](main_module._internal_.RemotePlayback.md#state)

### Methods

- [addEventListener](main_module._internal_.RemotePlayback.md#addeventlistener)
- [cancelWatchAvailability](main_module._internal_.RemotePlayback.md#cancelwatchavailability)
- [dispatchEvent](main_module._internal_.RemotePlayback.md#dispatchevent)
- [prompt](main_module._internal_.RemotePlayback.md#prompt)
- [removeEventListener](main_module._internal_.RemotePlayback.md#removeeventlistener)
- [watchAvailability](main_module._internal_.RemotePlayback.md#watchavailability)

## Properties

### onconnect

• **onconnect**: ``null`` \| (`this`: [`RemotePlayback`](../modules/main_module._internal_.md#remoteplayback), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11527

___

### onconnecting

• **onconnecting**: ``null`` \| (`this`: [`RemotePlayback`](../modules/main_module._internal_.md#remoteplayback), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11528

___

### ondisconnect

• **ondisconnect**: ``null`` \| (`this`: [`RemotePlayback`](../modules/main_module._internal_.md#remoteplayback), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11529

___

### state

• `Readonly` **state**: [`RemotePlaybackState`](../modules/main_module._internal_.md#remoteplaybackstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11530

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RemotePlaybackEventMap`](main_module._internal_.RemotePlaybackEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RemotePlayback`](../modules/main_module._internal_.md#remoteplayback), `ev`: [`RemotePlaybackEventMap`](main_module._internal_.RemotePlaybackEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11534

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11535

___

### cancelWatchAvailability

▸ **cancelWatchAvailability**(`id?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11531

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/main_module._internal_.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### prompt

▸ **prompt**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11532

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RemotePlaybackEventMap`](main_module._internal_.RemotePlaybackEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RemotePlayback`](../modules/main_module._internal_.md#remoteplayback), `ev`: [`RemotePlaybackEventMap`](main_module._internal_.RemotePlaybackEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11536

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11537

___

### watchAvailability

▸ **watchAvailability**(`callback`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`RemotePlaybackAvailabilityCallback`](main_module._internal_.RemotePlaybackAvailabilityCallback.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11533
