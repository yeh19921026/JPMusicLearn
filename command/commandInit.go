package command

import (
	"os"

	"github.com/urfave/cli"
)

func Init() error {
	app := cli.NewApp()
	//cli name
	app.Name = "JPMLServer"
	//cli description
	app.Usage = "A web server for learning japanese by songs."
	//cli default action
	app.Action = ServerCommand.Action
	//cli other command
	app.Commands = []cli.Command{
		ServerCommand,
	}

	return app.Run(os.Args)
}
