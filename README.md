Neuroglancer: Web-based volumetric data visualization
-----------------------------------------------------

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![PyPI](https://img.shields.io/pypi/v/neuroglancer)](https://pypi.org/project/neuroglancer)
![Build](https://github.com/google/neuroglancer/workflows/Build/badge.svg)

Neuroglancer is a WebGL-based viewer for volumetric data.  It is capable of displaying arbitrary (non axis-aligned) cross-sectional views of volumetric data, as well as 3-D meshes and line-segment based models (skeletons).

This is a fork of the main branch which is located [here](https://github.com/google/neuroglancer)

Here is a brief listing of our modifictions:
1. Data is stored in a MySQL database from a REST API.
1. We removed the very very long URLs and replaced it with two variables that keep track of data via the REST API.
1. Modified the hiding/closing buttons on the layer controls.
1. Added a link to automatically align layers to our Active Brain Atlas.
1. Added peer to peer data sharing by making use of [Firebase](https://firebase.google.com/) .
1. Added the ability to import and export annotations from CSV files.

More modifictions are on the way.

