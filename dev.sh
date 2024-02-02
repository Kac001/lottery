TAG=${1:-latest}

docker run --rm -itd \
    -p 9000:8888 \
    -p 443:443 \
    -v "$(pwd)"/server/data:/lottery/server/data/ \
     lottery:$TAG
