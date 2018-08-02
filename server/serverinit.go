package server

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func Run() error {
	// Set the router as the default one shipped with Gin
	router := gin.Default()

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./views", false)))
	router.NoRoute(func(c *gin.Context) {
		c.File("./views/index.html")
	})
	/*router.NoRoute(func(c *gin.Context) {
		fmt.Println("router.NoRoute ", c.Writer)
	})*/
	RouterApi(router)

	router.Run(":3000")
	return nil
}
