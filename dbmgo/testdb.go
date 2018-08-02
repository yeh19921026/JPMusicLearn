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
