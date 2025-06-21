#!/bin/bash
docker build -f dockerfiles/backend/Dockerfile -t the_scrapond-backend .
docker run --rm -v $(pwd)/lib:/app/lib -e BEARER_TOKEN=$BEARER_TOKEN the_scrapond-backend:latest
