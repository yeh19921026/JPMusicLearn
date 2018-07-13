package dbmgo

import (
	"fmt"
	"log"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type DBConnection struct {
	C *mgo.Collection
}

func NewConnect(collection string) DBConnection {
	var dbc DBConnection
	dbc.C = mgodatabase.C(collection).With(mgodatabase.Session.Copy())
	return dbc
}

func (dbc *DBConnection) FindbyNickName(nickname string) (interface{}, error) {

	result := []bson.M{}
	err := dbc.C.Find(bson.M{"NickName": nickname}).One(&result)
	if err != nil {
		log.Fatal(err)
		return nil, err
	}
	return result, nil
}

func (dbc *DBConnection) Insert(data interface{}) error {

	err := dbc.C.Insert(data)
	if err != nil {
		log.Fatal(err)
	}

	return err
}

func (dbc *DBConnection) FindAll() (interface{}, error) {
	result := []bson.M{}

	err := dbc.C.Find(nil).All(&result)
	if err != nil {
		return nil, err
	}
	fmt.Println("r = ", result)

	/*var person Person
	for iter.Next(&person) {
		fmt.Println(person)
	}*/

	return result, err
}
func (dbc *DBConnection) FindAllIter() (*mgo.Iter, error) {

	iter := dbc.C.Find(nil).Iter()
	/*var person Person
	for iter.Next(&person) {
		fmt.Println(person)
	}*/

	return iter, nil
}
func (db *DBConnection) Update(id string, data interface{}) error {

	err := db.C.UpdateId(bson.M{"id": id}, data)

	return err
}
func (db *DBConnection) Close() {
	db.C.Database.Session.Close()
}
