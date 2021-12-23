package main

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
)

func main() {

	app := fiber.New()

	backendServiceQueryEnv := os.Getenv("BACKEND_SERVICE_QUERY")
	backendServiceCommandEnv := os.Getenv("BACKEND_SERVICE_COMMAND")

	if len(backendServiceQueryEnv) == 0 {
		backendServiceQueryEnv = "http://localhost:4001"
	}

	if len(backendServiceCommandEnv) == 0 {
		backendServiceCommandEnv = "http://localhost:4002"
	}

	controller := app.Group("/v1")
	controller.Get("/healthz", proxy.Balancer(proxy.Config{
		Servers: []string{
			backendServiceQueryEnv,
			backendServiceCommandEnv,
		},
	}))

	app.Listen(":4000")

}
