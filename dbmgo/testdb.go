package dbmgo

import (
	"fmt"
	"time"

	"gopkg.in/mgo.v2/bson"
)

type testtype struct {
	ID           bson.ObjectId `bson:"_id,omitempty"`
	Registertime time.Time     `bson:"registertime"`
	Name         string        `bson:"name"`
	Nickname     string        `bson:"nickname"`
}
type Prfile struct {
	Subject       string    `bson:"subject"`
	RegisterTime  time.Time `bson:"registertime"`
	Varify        bool      `bson:"varify"`
	Name          string    `bson:"name"`
	NickName      string    `bson:"nickname"`
	Birthday      string    `bson:"birthday"`
	JPProficiency int       `bson:"jpproficiency"`
}

func TestType() {
	dbc := NewConnect("testtype")
	t := testtype{"000000000002", time.Now(), "nname", "nnnickname"}
	dbc.Insert(&t)
	fmt.Print(t.ID.Hex())
	fmt.Println(t.Registertime)

	iter, _ := dbc.FindAllIter()
	var person testtype
	for iter.Next(&person) {
		fmt.Print("-----")
		fmt.Print(person)
		fmt.Print(person.ID)
		fmt.Println(person.Registertime)
	}
}
