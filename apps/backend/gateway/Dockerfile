FROM golang:latest
WORKDIR /app
COPY apps/backend/gateway/go.mod ./
COPY apps/backend/gateway/go.sum ./
RUN go mod download
COPY apps/backend/gateway/main.go ./
RUN go build -o dist/bin -a -v .
EXPOSE 4000
CMD [ "./dist/bin" ]