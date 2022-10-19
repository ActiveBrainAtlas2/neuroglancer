[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](data_panel_layout.md) / <internal\>

# Module: <internal\>

## Table of contents

### Enumerations

- [ChunkState](../enums/data_panel_layout._internal_.ChunkState.md)
- [MessageSeverity](../enums/data_panel_layout._internal_.MessageSeverity.md)

### Classes

- [CapacitySpecification](../classes/data_panel_layout._internal_.CapacitySpecification.md)
- [Chunk](../classes/data_panel_layout._internal_.Chunk.md)
- [ChunkLayout](../classes/data_panel_layout._internal_.ChunkLayout.md)
- [ChunkManager](../classes/data_panel_layout._internal_.ChunkManager.md)
- [ChunkQueueManager](../classes/data_panel_layout._internal_.ChunkQueueManager.md)
- [ChunkSource](../classes/data_panel_layout._internal_.ChunkSource.md)
- [DepthRenderbuffer](../classes/data_panel_layout._internal_.DepthRenderbuffer.md)
- [DepthTextureBuffer](../classes/data_panel_layout._internal_.DepthTextureBuffer.md)
- [EventActionMap](../classes/data_panel_layout._internal_.EventActionMap.md)
- [Framebuffer](../classes/data_panel_layout._internal_.Framebuffer.md)
- [FramebufferConfiguration](../classes/data_panel_layout._internal_.FramebufferConfiguration.md)
- [FrontendSliceViewBase](../classes/data_panel_layout._internal_.FrontendSliceViewBase.md)
- [HierarchicalMap](../classes/data_panel_layout._internal_.HierarchicalMap.md)
- [HistogramSpecifications](../classes/data_panel_layout._internal_.HistogramSpecifications.md)
- [LayerChunkProgressInfo](../classes/data_panel_layout._internal_.LayerChunkProgressInfo.md)
- [Message](../classes/data_panel_layout._internal_.Message.md)
- [MessageList](../classes/data_panel_layout._internal_.MessageList.md)
- [MultiscaleSliceViewChunkSource](../classes/data_panel_layout._internal_.MultiscaleSliceViewChunkSource.md)
- [RefCountedValue](../classes/data_panel_layout._internal_.RefCountedValue.md)
- [Renderbuffer](../classes/data_panel_layout._internal_.Renderbuffer.md)
- [SizeManaged](../classes/data_panel_layout._internal_.SizeManaged.md)
- [SliceView](../classes/data_panel_layout._internal_.SliceView.md)
- [SliceViewBase](../classes/data_panel_layout._internal_.SliceViewBase.md)
- [SliceViewChunk](../classes/data_panel_layout._internal_.SliceViewChunk.md)
- [SliceViewChunkSource](../classes/data_panel_layout._internal_.SliceViewChunkSource.md)
- [SliceViewProjectionParameters](../classes/data_panel_layout._internal_.SliceViewProjectionParameters.md)
- [SliceViewRenderLayer](../classes/data_panel_layout._internal_.SliceViewRenderLayer.md)
- [StringMemoize](../classes/data_panel_layout._internal_.StringMemoize.md)
- [TextureBuffer](../classes/data_panel_layout._internal_.TextureBuffer.md)
- [TextureHistogramGenerator](../classes/data_panel_layout._internal_.TextureHistogramGenerator.md)
- [TrackableRGB](../classes/data_panel_layout._internal_.TrackableRGB.md)
- [Uint64](../classes/data_panel_layout._internal_.Uint64.md)
- [VisibilityPriorityAggregator](../classes/data_panel_layout._internal_.VisibilityPriorityAggregator.md)
- [WatchableMap](../classes/data_panel_layout._internal_.WatchableMap.md)
- [WatchableVisibilityPriority](../classes/data_panel_layout._internal_.WatchableVisibilityPriority.md)

### Interfaces

- [ChunkSourceConstructor](../interfaces/data_panel_layout._internal_.ChunkSourceConstructor.md)
- [DebouncedFunc](../interfaces/data_panel_layout._internal_.DebouncedFunc.md)
- [EventAction](../interfaces/data_panel_layout._internal_.EventAction.md)
- [FrameNumberCounter](../interfaces/data_panel_layout._internal_.FrameNumberCounter.md)
- [FrontendTransformedSource](../interfaces/data_panel_layout._internal_.FrontendTransformedSource.md)
- [FrontendVisibleLayerSources](../interfaces/data_panel_layout._internal_.FrontendVisibleLayerSources.md)
- [HierarchicalMapInterface](../interfaces/data_panel_layout._internal_.HierarchicalMapInterface.md)
- [HistogramChannelSpecification](../interfaces/data_panel_layout._internal_.HistogramChannelSpecification.md)
- [MultiscaleVolumetricDataRenderLayer](../interfaces/data_panel_layout._internal_.MultiscaleVolumetricDataRenderLayer.md)
- [ScaleBarOptions](../interfaces/data_panel_layout._internal_.ScaleBarOptions.md)
- [ScaleBarTextureOptions](../interfaces/data_panel_layout._internal_.ScaleBarTextureOptions.md)
- [SliceViewChunkSource](../interfaces/data_panel_layout._internal_.SliceViewChunkSource-1.md)
- [SliceViewChunkSourceOptions](../interfaces/data_panel_layout._internal_.SliceViewChunkSourceOptions.md)
- [SliceViewChunkSpecification](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)
- [SliceViewRenderContext](../interfaces/data_panel_layout._internal_.SliceViewRenderContext.md)
- [SliceViewRenderLayer](../interfaces/data_panel_layout._internal_.SliceViewRenderLayer-1.md)
- [SliceViewRenderLayerOptions](../interfaces/data_panel_layout._internal_.SliceViewRenderLayerOptions.md)
- [SliceViewSingleResolutionSource](../interfaces/data_panel_layout._internal_.SliceViewSingleResolutionSource.md)
- [SliceViewSourceOptions](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md)
- [TransformedSource](../interfaces/data_panel_layout._internal_.TransformedSource.md)
- [VisibleLayerSources](../interfaces/data_panel_layout._internal_.VisibleLayerSources.md)
- [VisibleSourceInfo](../interfaces/data_panel_layout._internal_.VisibleSourceInfo.md)

### Type Aliases

- [ActionIdentifier](data_panel_layout._internal_.md#actionidentifier)
- [ActionOrEventAction](data_panel_layout._internal_.md#actionoreventaction)
- [DataTypeInterval](data_panel_layout._internal_.md#datatypeinterval)
- [EventActionMapInterface](data_panel_layout._internal_.md#eventactionmapinterface)
- [GettableChunkSource](data_panel_layout._internal_.md#gettablechunksource)
- [NamedAxes](data_panel_layout._internal_.md#namedaxes)
- [NormalizedEventIdentifier](data_panel_layout._internal_.md#normalizedeventidentifier)
- [Parameters](data_panel_layout._internal_.md#parameters)
- [ReturnType](data_panel_layout._internal_.md#returntype)
- [VisibilityPriority](data_panel_layout._internal_.md#visibilitypriority)

### Variables

- [Base](data_panel_layout._internal_.md#base)

## Type Aliases

### ActionIdentifier

Ƭ **ActionIdentifier**: `string`

Identifies a user-defined action name.  Actions are dispatched as DOM events, using 'action:'
prepended to the ActionIdentifier as the event type.

#### Defined in

[src/neuroglancer/util/event_action_map.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/event_action_map.ts#L70)

___

### ActionOrEventAction

Ƭ **ActionOrEventAction**: [`EventAction`](../interfaces/data_panel_layout._internal_.EventAction.md) \| [`ActionIdentifier`](data_panel_layout._internal_.md#actionidentifier)

Specifies either an EventAction or a bare ActionIdentifier.

#### Defined in

[src/neuroglancer/util/event_action_map.ts:270](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/event_action_map.ts#L270)

___

### DataTypeInterval

Ƭ **DataTypeInterval**: [`number`, `number`] \| [[`Uint64`](../classes/data_panel_layout._internal_.Uint64.md), [`Uint64`](../classes/data_panel_layout._internal_.Uint64.md)]

#### Defined in

[src/neuroglancer/util/lerp.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/lerp.ts#L22)

___

### EventActionMapInterface

Ƭ **EventActionMapInterface**: [`HierarchicalMapInterface`](../interfaces/data_panel_layout._internal_.HierarchicalMapInterface.md)<[`NormalizedEventIdentifier`](data_panel_layout._internal_.md#normalizedeventidentifier), [`EventAction`](../interfaces/data_panel_layout._internal_.EventAction.md)\>

#### Defined in

[src/neuroglancer/util/event_action_map.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/event_action_map.ts#L96)

___

### GettableChunkSource

Ƭ **GettableChunkSource**: [`SharedObject`](../classes/worker_rpc.SharedObject.md) & { `OPTIONS`: {} ; `key`: `any`  }

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L313)

___

### NamedAxes

Ƭ **NamedAxes**: ``"xy"`` \| ``"xz"`` \| ``"yz"``

#### Defined in

[src/neuroglancer/data_panel_layout.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L79)

___

### NormalizedEventIdentifier

Ƭ **NormalizedEventIdentifier**: `string`

Specifies a unique string representation of an input event, used for matching an input event to a
corresponding action with which it has been associated.

The EventIdentifier combines several pieces of information using the following syntax:

  NormalizedEventIdentifier ::= phase ':' ( modifier '+' )* base-event-identifier

  - The event `phase` name, corresponding to the phase of DOM event processing at which the event was
    received, which may be 'at', 'bubble', or 'capture'.  (Currently, 'capture' is not supported.)

  - The set of `modifier` keys ('control', 'alt', 'meta', and/or 'shift') active when the event occurred.

  - The `base-event-identifier`, which in the case of keyboard events is the lowercase KeyboardEvent
    `code`, and in the case of mouse events is one of:

      - 'mousedown' + n
      - 'mouseup' + n
      - 'click' + n
      - 'dblclick' + n
      - 'wheel'

    where `n` is the index of the mouse button, starting from 0.

In the normalized form used for matching events, the set of modifiers must be specified in
exactly the order: 'control', 'alt', 'meta', 'shift'.  Consequently, there is exactly one
NormalizedEventIdentifier representation for a given input event.

#### Defined in

[src/neuroglancer/util/event_action_map.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/event_action_map.ts#L52)

___

### Parameters

Ƭ **Parameters**<`T`\>: `T` extends (...`args`: infer P) => `any` ? `P` : `never`

Obtain the parameters of a function type in a tuple

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1592

___

### ReturnType

Ƭ **ReturnType**<`T`\>: `T` extends (...`args`: `any`) => infer R ? `R` : `any`

Obtain the return type of a function type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1602

___

### VisibilityPriority

Ƭ **VisibilityPriority**: `number`

Numeric value specifying a visibility or prefetch priority.

A value of `Number.POSITIVE_INFINITY` means visible.

Any other finite value means not visible, and specifies the prefetch priority (higher means
higher priority); this should always be a small integer.

A value of `Number.NEGATIVE_INFINITY` means ignored (not visible, and not prefetched).

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L32)

## Variables

### Base

• `Const` **Base**: { `prototype`: `__class`<`any`\>  } & typeof [`FrontendSliceViewBase`](../classes/data_panel_layout._internal_.FrontendSliceViewBase.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L47)
