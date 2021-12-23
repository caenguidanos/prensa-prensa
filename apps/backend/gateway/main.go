package main

import (
	"github.com/caenguidanos/prensa-prensa/gateway/app"
)

func main() {
	server := app.CreateHttpServer()

	server.Listen(":4000")
}
