#!/bin/bash

if (($# < 1))
then
    echo "Enter either webdev, local, or activebrainatlas ... exiting"
    exit 1
fi
        

SITE=$1
SERVICE_FILE="./src/neuroglancer/services/$SITE.ts"

if [ -f "$SERVICE_FILE" ]; then
    echo "$SERVICE_FILE exists."
    cp -vf "$SERVICE_FILE" ./src/neuroglancer/services/service.ts
else 
    echo "$SERVICE_FILE does not exist. Exiting"
    exit 1
fi