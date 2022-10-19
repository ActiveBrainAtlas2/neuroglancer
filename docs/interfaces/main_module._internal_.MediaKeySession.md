[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / MediaKeySession

# Interface: MediaKeySession

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).MediaKeySession

This EncryptedMediaExtensions API interface represents a context for message exchange with a content decryption module (CDM).
Available only in secure contexts.

## Hierarchy

- [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

  ↳ **`MediaKeySession`**

## Table of contents

### Properties

- [closed](main_module._internal_.MediaKeySession.md#closed)
- [expiration](main_module._internal_.MediaKeySession.md#expiration)
- [keyStatuses](main_module._internal_.MediaKeySession.md#keystatuses)
- [onkeystatuseschange](main_module._internal_.MediaKeySession.md#onkeystatuseschange)
- [onmessage](main_module._internal_.MediaKeySession.md#onmessage)
- [sessionId](main_module._internal_.MediaKeySession.md#sessionid)

### Methods

- [addEventListener](main_module._internal_.MediaKeySession.md#addeventlistener)
- [close](main_module._internal_.MediaKeySession.md#close)
- [dispatchEvent](main_module._internal_.MediaKeySession.md#dispatchevent)
- [generateRequest](main_module._internal_.MediaKeySession.md#generaterequest)
- [load](main_module._internal_.MediaKeySession.md#load)
- [remove](main_module._internal_.MediaKeySession.md#remove)
- [removeEventListener](main_module._internal_.MediaKeySession.md#removeeventlistener)
- [update](main_module._internal_.MediaKeySession.md#update)

## Properties

### closed

• `Readonly` **closed**: `Promise`<[`MediaKeySessionClosedReason`](../modules/main_module._internal_.md#mediakeysessionclosedreason)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9356

___

### expiration

• `Readonly` **expiration**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9357

___

### keyStatuses

• `Readonly` **keyStatuses**: `MediaKeyStatusMap`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9358

___

### onkeystatuseschange

• **onkeystatuseschange**: ``null`` \| (`this`: [`MediaKeySession`](../modules/main_module._internal_.md#mediakeysession), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9359

___

### onmessage

• **onmessage**: ``null`` \| (`this`: [`MediaKeySession`](../modules/main_module._internal_.md#mediakeysession), `ev`: [`MediaKeyMessageEvent`](../modules/main_module._internal_.md#mediakeymessageevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9360

___

### sessionId

• `Readonly` **sessionId**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9361

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaKeySessionEventMap`](main_module._internal_.MediaKeySessionEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaKeySession`](../modules/main_module._internal_.md#mediakeysession), `ev`: [`MediaKeySessionEventMap`](main_module._internal_.MediaKeySessionEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9367

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

node_modules/typescript/lib/lib.dom.d.ts:9368

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9362

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

### generateRequest

▸ **generateRequest**(`initDataType`, `initData`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initDataType` | `string` |
| `initData` | [`BufferSource`](../modules/main_module._internal_.md#buffersource) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9363

___

### load

▸ **load**(`sessionId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9364

___

### remove

▸ **remove**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9365

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaKeySessionEventMap`](main_module._internal_.MediaKeySessionEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaKeySession`](../modules/main_module._internal_.md#mediakeysession), `ev`: [`MediaKeySessionEventMap`](main_module._internal_.MediaKeySessionEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9369

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

node_modules/typescript/lib/lib.dom.d.ts:9370

___

### update

▸ **update**(`response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`BufferSource`](../modules/main_module._internal_.md#buffersource) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9366
