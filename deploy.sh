#!/bin/bash

rm -vf dist/min/*
npm run build-min
rm -vf neuroglancer.tar.gz
cd dist/min/
tar zcvf ../../neuroglancer.tar.gz *
cd ../../
