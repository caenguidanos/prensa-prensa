package app

import (
	"github.com/caenguidanos/prensa-prensa/gateway/lib"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/proxy"
)

func CreateHttpServer() *fiber.App {
	app := fiber.New()

	app.Use(cors.New())
	app.Use(compress.New())
	app.Use(logger.New())

	preffix := "/v1"

	queryUrl, queryUrlWithPreffix, commandUrl, commandUrlWithPreffix := lib.GetMicroserviceUrl(preffix)

	controller := app.Group(preffix)

	controller.Get("/healthz", proxy.Balancer(proxy.Config{
		Servers: []string{
			queryUrl,
			commandUrl,
		},
	}))

	controller.Get("/articles", func(c *fiber.Ctx) error {
		url := queryUrlWithPreffix

		if err := proxy.Do(c, url); err != nil {
			return err
		}

		return nil
	})

	controller.Post("/articles", func(c *fiber.Ctx) error {
		url := commandUrlWithPreffix

		if err := proxy.Do(c, url); err != nil {
			return err
		}

		return nil
	})

	controller.Get("/articles/:id", func(c *fiber.Ctx) error {
		url := queryUrlWithPreffix + "/" + c.Params("id")

		if err := proxy.Do(c, url); err != nil {
			return err
		}

		return nil
	})

	controller.Patch("/articles/:id", func(c *fiber.Ctx) error {
		url := commandUrlWithPreffix + "/" + c.Params("id")

		if err := proxy.Do(c, url); err != nil {
			return err
		}

		return nil
	})

	controller.Delete("/articles/:id", func(c *fiber.Ctx) error {
		url := commandUrlWithPreffix + "/" + c.Params("id")

		if err := proxy.Do(c, url); err != nil {
			return err
		}

		return nil
	})

	controller.Get("/articles/derived/:type", func(c *fiber.Ctx) error {
		paramType := c.Params("type")

		if paramType == "new" || paramType == "archive" {
			url := queryUrlWithPreffix + "/derived/" + paramType

			if err := proxy.Do(c, url); err != nil {
				return err
			}

			return nil
		}

		return fiber.ErrBadRequest

	})

	return app
}
