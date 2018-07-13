package dbmgo

import (
	"os"

	mgo "gopkg.in/mgo.v2"
)

var (
	mgodatabase *mgo.Database
	Mongo       *mgo.DialInfo
)

func MgoInit() error {
	session, err := mgo.Dial("127.0.0.1")
	if err != nil {
		panic(err)
		return err
	}
	//defer session.Close()

	// Optional. Switch the session to a monotonic behavior.
	session.SetMode(mgo.Monotonic, true)

	mgodatabase = session.DB(os.Getenv("DATABASE_NAME"))

	return nil
}

//example http://www.01happy.com/golang-mongodb-find-demo/
//https://gist.github.com/ardan-bkennedy/9198289
