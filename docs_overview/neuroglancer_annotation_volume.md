#### High level overview of Volume Annotation Module
The `volume.ts` module in `neuroglancer/annotation` directory supports various operations for rendering volumes. A volume is basically a structure which is a series of polygons in different sections.
This module also provides the functionality to see if a new polygon can be added in a section by checking if there exists a polygon already in the section. If there is no polygon in the current section then the polygon drawing is allowed otherwise it is not allowed.
