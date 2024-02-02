TAG=${1:-latest}

docker run --rm -itd \
    -p 5003:8888 \
    -p 443:443 \
    -v "$(pwd)"/server/data:/lottery/server/data/ \
     lottery:$TAG
