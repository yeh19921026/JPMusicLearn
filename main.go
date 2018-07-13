package main

import (
	"test/golang-gin-react/command"
	"test/golang-gin-react/dbmgo"

	"github.com/astaxie/beego/logs"
)

//Log is an instance from beego-log
var Bglog *logs.BeeLogger

func main() {
	dbmgo.MgoInit()
	dbmgo.TestType()
	command.Init()
}

func logInit() {
	Bglog = logs.NewLogger(10000)
	Bglog.SetLogger(logs.AdapterConsole)
	//Log.SetLogger(logs.AdapterFile, `{"filename":"project.log","level":7,"maxlines":0,"maxsize":0,"daily":true,"maxdays":10}`)

	/*Log.Debug("my book is bought in the year of ", 2016)
	Log.Info("this %s cat is %v years old", "yellow", 3)
	Log.Warn("json is a type of kv like", map[string]int{"key": 2016})
	Log.Error(1024, "is a very", "good game")
	Log.Critical("oh,crash")*/
}
