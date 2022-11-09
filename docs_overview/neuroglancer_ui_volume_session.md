#### High level overview of UI Volume Session Module
- The `volume_session.ts` module in `neuroglancer/ui` directory is responsible for creating the Volume session UI element. The volume session UI element is created when the user clicks on the Volume icon in annotation layer.
The class `VolumeSessionDialog` implements this UI element.
This UI element has 3 buttons and their functionalities are as dicussed below:
   - Start a new volume: Provides the functionality to start a new volume session by selecting the color and landmark.
   - Edit a volume: Provides the functionality to edit existing volumes in the neuroglancer annotation layer.
   - Close current session: Provides the functionality to close the current active volume session.
