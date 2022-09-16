#!/bin/bash

rm -vf dist/min/*
npm run build-min
rm -vf activebrainatlas.neuroglancer.tar.gz
cd dist/min/
tar zcvf ../../activebrainatlas.neuroglancer.tar.gz *
cd ../../
