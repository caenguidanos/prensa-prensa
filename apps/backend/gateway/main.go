package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
)

func main() {

	app := fiber.New()

	controller := app.Group("/v1")
	controller.Get("/healthz", proxy.Balancer(proxy.Config{
		Servers: []string{
			"http://localhost:4001",
			"http://localhost:4002",
		},
	}))

	app.Listen(":4000")

}
