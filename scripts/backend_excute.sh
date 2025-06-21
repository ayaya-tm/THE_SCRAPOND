# !/bin/bash
cd ~/project/THE_SCRAPOND_v2/
docker build -f dockerfiles/backend/Dockerfile -t the_scrapond-backend .
docker run --rm -v $(pwd)/lib:/app/lib -e BEARER_TOKEN=$BEARER_TOKEN the_scrapond-backend:latest
