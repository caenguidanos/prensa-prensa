FROM golang:latest
WORKDIR /app
COPY apps/backend/gateway/ ./
RUN go mod download
RUN go build -o dist/bin -a -v .
EXPOSE 4000
CMD [ "./dist/bin" ]