package command

import (
	"test/golang-gin-react/server"
	auth0 "test/golang-gin-react/server/Auth0"

	"github.com/urfave/cli"
)

var (
	ServerCommand = cli.Command{
		Name:  "start",
		Usage: "啟動伺服器",
		Action: func(c *cli.Context) error {
			return runServer(c)
		},
	}
)

func runServer(c *cli.Context) error {
	auth0.JWTInit()
	server.Run()
	return nil
}
