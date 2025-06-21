# !/bin/bash
deleteid=$(docker ps |grep the_scrapond-front-prd |awk '{print $1}')
if [ $deleteid != "" ]; then
    docker stop $deleteid
    docker rm $deleteid
fi

cd ~/project/THE_SCRAPOND_v2/
docker build -t the_scrapond-front-prd -f ./dockerfiles/frontend/Dockerfile.prd .
docker run -d -p 8080:80 -v $(pwd)/lib:/usr/share/nginx/html/rankings --name scrapond-prd the_scrapond-front-prd