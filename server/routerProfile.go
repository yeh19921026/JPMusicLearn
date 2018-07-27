package server

//https://github.com/pirsquare/country-mapper
import (
	"fmt"
	"log"
	"net/http"
	"test/golang-gin-react/dbmgo"
	auth0 "test/golang-gin-react/server/Auth0"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/pirsquare/country-mapper"
	"gopkg.in/mgo.v2/bson"
)

var countryClient *country_mapper.CountryInfoClient

func init() {
	client, err := country_mapper.Load()
	if err != nil {
		panic(err)
	}

	countryClient = client
	countryClient.MapByRegion("AA")
}

type Profile struct {
	Subject       string    `bson:"subject" binding:"required"`
	RegisterTime  time.Time `bson:"registertime" binding:"required"`
	Varify        bool      `bson:"finishregister" binding:"required"`
	Name          string    `bson:"name" binding:"required"`
	NickName      string    `bson:"nickname"`
	Birthday      string    `bson:"birthday"`
	Country       int       `bson:"country"`
	JPProficiency int       `bson:"jpproficiency"`
}

func RouterProfile(router *gin.Engine) error {
	router.GET("/jokes/like/:jokeID", auth0.AuthMiddleware(), ProfileHandler)
	return nil
}
func ProfileHandler(c *gin.Context) {
	c.Header("Content-Type", "application:json")
	dbconn := dbmgo.NewConnect("Profile")
	defer dbconn.Close()
	result, err := findbySubject(dbconn, "")
	if err != nil {
		fmt.Println(err)
	}
	//main.Bglog.info("result = ", result)
	c.JSON(http.StatusOK, result)
}

func findbySubject(dbc dbmgo.DBConnection, subject string) (Profile, error) {

	var result Profile
	err := dbc.C.Find(bson.M{"subject": subject}).One(&result)
	if err != nil {
		log.Fatal(err)
	}
	return result, nil
}
