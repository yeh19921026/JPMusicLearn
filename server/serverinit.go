package server

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func Run() error {
	// Set the router as the default one shipped with Gin
	router := gin.Default()

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./views", true)))

	RouterApi(router)

	router.Run(":3000")
	return nil
}
