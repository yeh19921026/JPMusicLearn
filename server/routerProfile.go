package server

//https://github.com/pirsquare/country-mapper
import (
	"encoding/json"
	"fmt"
	"net/http"
	"test/golang-gin-react/dbmgo"
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
	Subject       string `bson:"subject" binding:"required"`
	RegisterTime  int64  `bson:"registertime" binding:"required"`
	Varify        bool   `bson:"finishregister" binding:"required"`
	Name          string `bson:"name" binding:"required"`
	NickName      string `bson:"nickname"`
	Birthday      string `bson:"birthday"`
	Country       int    `bson:"country"`
	JPProficiency int    `bson:"jpproficiency"`
}

func updateUserinfoHandler(c *gin.Context) {

	// Parse userinfo from json string to map
	var data map[string]string
	buf := make([]byte, 1024)
	n, _ := c.Request.Body.Read(buf)
	json.Unmarshal(buf[0:n], &data)
	fmt.Println(data)

	//search and update date to db
	c.Header("Content-Type", "application:json")
	dbconn := dbmgo.NewConnect("profile")
	defer dbconn.Close()
	result, err := findbySubject(dbconn, data["sub"])
	if err != nil {
		result = newUser(data, dbconn)
	}

	jsonresult, err := json.Marshal(result)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(jsonresult)
	c.JSON(http.StatusOK, jsonresult)
}
func newUser(data map[string]string, db dbmgo.DBConnection) Profile {
	profile := Profile{
		Subject:       data["sub"],
		RegisterTime:  time.Now().Unix(),
		Varify:        false,
		Name:          data["name"],
		NickName:      "",
		Birthday:      "",
		Country:       0,
		JPProficiency: 0,
	}
	db.Insert(profile)
	return profile
}
func findbySubject(dbc dbmgo.DBConnection, subject string) (Profile, error) {

	var result Profile
	err := dbc.C.Find(bson.M{"subject": subject}).One(&result)
	/*if err != nil {
		log.Fatal(err)
	}*/
	return result, err
}
