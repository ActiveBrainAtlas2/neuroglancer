#### High level overview of UI COM (Centre of mass) Session Module
- The `com_session.ts` module in `neuroglancer/ui` directory is responsible for creating the COM session UI element. The COM session UI element is created when the user clicks on the Volume icon in annotation layer.
The class `COMSessionDialog` implements this UI element.
This UI element has 3 buttons and their functionalities are as dicussed below:
   - Start a new COM: Provides the functionality to start a new COM session by selecting the color and landmark.
   - Edit existing COM: Provides the functionality to edit existing COMs in the neuroglancer annotation layer.
   - Close current session: Provides the functionality to close the current active com session.
