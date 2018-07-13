package server

import (
	"fmt"
	"net/http"
	"reflect"
	"strconv"
	"test/golang-gin-react/dbmgo"
	auth0 "test/golang-gin-react/server/Auth0"

	"github.com/gin-gonic/gin"
	"gopkg.in/mgo.v2/bson"
)

type Joke struct {
	ID    int    `json:"id" binding:"required"`
	Likes int    `json:"likes"`
	Joke  string `json:"joke" binding:"required"`
}

func RouterApi(router *gin.Engine) error {
	// Setup route group for the API
	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})
	}
	api.GET("/jokes", auth0.AuthMiddleware(), jokeHandler)
	api.POST("/jokes/like/:jokeID", auth0.AuthMiddleware(), likeJoke)
	return nil
}
func jokeHandler(c *gin.Context) {
	c.Header("Content-Type", "application:json")
	dbconn := dbmgo.NewConnect("joke")
	defer dbconn.Close()
	result, _ := dbconn.FindAll()
	fmt.Println("result = ", result)
	c.JSON(http.StatusOK, result)
}
func likeJoke(c *gin.Context) {
	if jokeid, err := strconv.Atoi(c.Param("jokeID")); err == nil {
		dbconn := dbmgo.NewConnect("joke")
		defer dbconn.Close()
		iter, _ := dbconn.FindAllIter()
		joke := bson.M{}
		for iter.Next(&joke) {
			fmt.Println("LIKE THIS JOKE!!!", joke)
			fmt.Println(reflect.TypeOf(joke["id"]))
			if int(joke["id"].(float64)) == jokeid {
				fmt.Println(jokeid, " + 1")
				joke["like"] = joke["like"].(float64) + 1
				dbconn.Update(joke["id"].(string), joke)
			}
		}
		//c.Header("Content-Type", "application:json")
		c.JSON(http.StatusOK, &joke)
	} else {
		c.AbortWithStatus(http.StatusNotFound)
	}
}
