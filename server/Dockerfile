# 開発環境
FROM golang:1.11

WORKDIR /api
ADD . /api
ENV GO111MODULE=on

RUN go get github.com/pilu/fresh && \
  go get -v github.com/globalsign/mgo && \
  go get github.com/gin-gonic/gin
CMD ["fresh"]
