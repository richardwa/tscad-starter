# tscad-starter

## Getting started
1. git clone https://github.com/richardwa/tscad-starter
2. cd tscad-starter
3. npm install
4. npm run viewer
5. open browser to http://localhost:1234/proj1/example.ts

* easily create new files and navigate to them on the url (relative to where the viewer was started)
* viewable files must export a main object of type Shape3


# Create Obj file 
npm run render proj1/example.ts

# Features
* webgl rendering with viewer.  The core CSG lib implements SDF in javascript and webgl.
* adaptive marching cubes (Dual Marching Cubes) for OBJ file output - i.e small triangles for edges and larger ones on flat areas. (still room for improvement here)
* VSCode recommended for Typescript support.  A major driver of this project is to have the 'developer' experience for 3D modeling
- code diffs and version history
- flexible file organization and re-use
- fully leverage javascript ecosystem for use in modeling
- IDE support / Autocomplete when modeling

* this is an example usage repo, view the full source code: https://github.com/richardwa/tscad

# WIP - Work In Progress
I feel the project is at a good place at for POC, I am sure there are bugs in rendering and webgl translations.