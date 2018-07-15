package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"

	"github.com/Joker/jade"

	"github.com/urfave/cli"
)

func main() {
	app := cli.NewApp()
	//cli name
	app.Name = "Jadder"
	//cli description
	app.Usage = "compile jade template"
	//cli default action
	//app.Action = ServerCommand.Action
	//cli other command
	app.Commands = []cli.Command{
		PugdictCommand,
		PugFileCommand,
	}
	app.Run(os.Args)

}

var (
	PugdictCommand = cli.Command{
		Name:      "jadDictionary",
		ShortName: "jd",
		Usage:     "編譯指定資料夾",
		/*Flags: []cli.Flag{
			cli.StringFlag{
				Name:  "dir",
				Value: "",
				Usage: "路徑",
			},
		},*/
		Action: func(c *cli.Context) error {
			return pugDict(c)
		},
	}
	PugFileCommand = cli.Command{
		Name:      "jadfile",
		ShortName: "j",
		Usage:     "編譯指定文件",
		/*Flags: []cli.Flag{
			cli.StringFlag{
				Name:  "dir",
				Value: "",
				Usage: "路徑",
			},
		},*/
		Action: func(c *cli.Context) error {
			return pugFile(c)
		},
	}
)

func pugDict(c *cli.Context) error {
	/*dir := os.Args[3]
	os.Chdir(".")
	// 获取所有文件
	files, err := ioutil.ReadDir(dir)
	if err != nil {
		return err
	}
	for _, file := range files {
		if file.IsDir() {
			continue
		} else {
			fmt.Println(file.Name())
		}
	}

	c.String("dir")*/
	return nil
}
func pugFile(c *cli.Context) error {
	dir := os.Args[2]

	//parsefile
	fmt.Println("jadding file at", dir)
	pugs, er := jade.ParseFile(dir)
	if er != nil {
		fmt.Println(er)
		return er
	}

	Savedir := convertReaddirToSavedir(dir)
	createDir, _ := filepath.Split(Savedir)
	os.MkdirAll(createDir, os.ModePerm)
	err := ioutil.WriteFile(Savedir, []byte(pugs), os.ModePerm)
	if err != nil {
		fmt.Println(err)
		return err
	}
	return nil
}

func convertReaddirToSavedir(dir string) string {
	dirArray := strings.Split(dir, "\\")
	if dirArray[0] == "jadefile" {
		dirArray[0] = "htmlfile"
	} else if dirArray[1] == "jadefile" {
		dirArray[1] = "htmlfile"
	}
	fileArray := strings.Split(dirArray[len(dirArray)-1], ".")
	dirArray[len(dirArray)-1] = fileArray[0] + ".html"
	return strings.Join(dirArray, "\\")
}
