
package main // import "server"

import (
    "server/handler"

    // "time"
    "fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/contrib/static"
    "github.com/gin-gonic/gin"

    "gopkg.in/mgo.v2"
)

func main() {

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

    db_names, _ := session.DatabaseNames()
    fmt.Printf("database num:%d\n", len(db_names))
        for _, v := range db_names {
        fmt.Printf("database name:%s\n", v)
    }

    db := session.DB("test")
    fmt.Printf("debug")

    c_names, _ := db.CollectionNames()
    for _, v := range c_names {
        fmt.Printf("collection name:%s\n", v)
    }

	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:8080"},
		AllowMethods: []string{"GET", "POST", "DELETE", "OPTIONS"},
		AllowHeaders: []string{"*"},
	}))

	// 追加!!
	r.Use(static.Serve("/", static.LocalFile("./images", true)))

	r.GET("/images", handler.List)
	r.POST("/images", handler.Upload)
	r.DELETE("/images/:uuid", handler.Delete)
	r.Run(":8888")
}
