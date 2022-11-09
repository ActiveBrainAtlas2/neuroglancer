#### High level overview of UI Cell Session Module
- The `cell_session.ts` module in `neuroglancer/ui` directory is responsible for creating the Cell session UI element. The cell session UI element is created when the user clicks on the Cell icon in annotation layer.
The class `CellSessionDialog` implements this UI element.
This UI element has 3 buttons and their functionalities are as dicussed below:
   - Start a new cell: Provides the functionality to start a new cell session by selecting the category and label.
   - Edit a cell: Provides the functionality to edit existing cells in the neuroglancer annotation layer.
   - Close current session: Provides the functionality to close the current active cell session.
