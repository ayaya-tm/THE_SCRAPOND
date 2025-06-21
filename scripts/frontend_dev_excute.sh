# !/bin/bash
cd ~/project/THE_SCRAPOND_v2/
cp lib/word_ranking.json frontend_docker_dev/public/rankings
docker build -t the_scrapond-front-dev -f ./dockerfiles/frontend/Dockerfile.dev .
docker run -it --rm -p 5173:5173 -v $(pwd)/frontend_docker_dev:/app -v /app/node_modules the_scrapond-front-dev