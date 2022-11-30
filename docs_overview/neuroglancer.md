#### High level overview of Neuroglancer
Neuroglancer is a WebGL-based viewer for volumetric data. Below is an overview of important modules used for creating/editing/deleting different types of annotations and saving them in the database. Click on the links for each module to see the detailed overview of each module.

##### Neurglancer Annotations Module
Responsible for handling annotations in Neuroglancer end-to-end: drawing using WebGL, serializing/deserializing for saving in database etc.
- [Annotation Module](modules/neuroglancer_annotation.html): Supports common operations for annotations across neuroglancer like serializing for loading in WebGL, converting to JSON for exporting to database, data type definitions etc.
- [Polygon Module](modules/neuroglancer_annotation_polygon.html): Supports various operations for rendering Polygons.
- [COM Module](modules/neuroglancer_annotation_com.html): Supports various operations for rendering COMs.
- [Cell Module](modules/neuroglancer_annotation_cell.html): Supports various operations for rendering Cells.
- [Volume Module](modules/neuroglancer_annotation_volume.html): Supports various operations for rendering Volumes.

##### Neuroglancer UI Module
Supports generating HTML UI elements used across neuroglancer for drawing annotations like annotation tools, volume session, cell session etc.
- [Annotation UI Module](modules/neuroglancer_ui_annotations.html): Supports multiple operations for annotations across neuroglancer for drawing UI elements.
- [Volume session UI Module](modules/neuroglancer_ui_volume_session.html): Responsible for creating the Volume session UI element.
- [COM session UI Module](modules/neuroglancer_ui_com_session.html): Responsible for creating the COM session UI element.
- [Cell session UI Module](modules/neuroglancer_ui_cell_session.html): Responsible for creating the Cell session UI element.

[Services Module](modules/neuroglancer_services_state_loader.html): Responsible for the loading of the JSON state from the Django database portal via the REST API.
