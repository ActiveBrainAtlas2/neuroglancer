#### High level overview of State loader module.
The `state_loader.ts` module in `neuroglancer/services` directory has the below functionality:
- Responsible for the loading the JSON state from the Django database portal via the REST API. The original data was all stored in a very very long URL which you could see in the location bar of the browser. Now, all this JSON data is stored in the relational database and the CRUD (create, retrieve, update and delete) operations are take care of by this module interfacing with the REST API.
