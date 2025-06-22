#!/bin/bash
gitstatus=$(git pull)
if echo "$gitstatus" | grep -q "frontend_docker_prd"; then    
    deleteid=$(docker ps |grep the_scrapond-front-prd |awk '{print $1}')
    if [ $deleteid != "" ]; then
        docker stop $deleteid
        docker rm $deleteid
    fi
    deleteid=$(docker ps -a |grep the_scrapond-front-prd |awk '{print $1}')
    if [ $deleteid != "" ]; then
        docker rm $deleteid
    fi

    docker build -t the_scrapond-front-prd -f ./dockerfiles/frontend/Dockerfile.prd .
    docker run -d -p 8080:80 -v $(pwd)/lib:/usr/share/nginx/html/rankings --name scrapond-prd the_scrapond-front-prd
else
    echo "prd frontendに変更なし: $(date)" >> /home/neko/autodeploy.log
fi