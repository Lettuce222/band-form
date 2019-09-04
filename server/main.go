
package main // import "server"

import (
    // "server/handler"

    // "time"
    "net/http"
    // "fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/contrib/static"
    "github.com/gin-gonic/gin"

    "gopkg.in/mgo.v2"
)

type Form struct {
    Email        string `json:"email"`
    Name      string `json:"name"`
    Food      string `json:"food"`
}

func main() {

    // init mongoDB
    credential := &mgo.Credential{
        Username:   "root",
        Password:   "example",
    }

    session, err := mgo.Dial("mongo:27017")
    if err != nil {
        panic(err)
    }
    defer session.Close()

    session.Login(credential)
    db := session.DB("test")
    collection := db.C("hoge")

	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:8080"},
		AllowMethods: []string{"GET", "POST", "DELETE", "OPTIONS"},
		AllowHeaders: []string{"*"},
	}))

	r.Use(static.Serve("/", static.LocalFile("./images", true)))

	r.POST("/band/update", func(c *gin.Context) {
        var form interface{}
        c.BindJSON(&form)
        myMap := form.(map[string]interface{})

        collection.Insert(myMap)

		c.String(http.StatusOK, "Hello %s!!", myMap["name"])
    })
	r.Run(":8888")
}
