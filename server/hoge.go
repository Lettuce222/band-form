import (
    "fmt"
    "log"

    "github.com/globalsign/mgo"
    "github.com/globalsign/mgo/bson"
)

type Person struct {
    ID   bson.ObjectId `bson:"_id"`
    Name string        `bson:"name"`
    Age  int           `bson:"age"`
}

func main() {
    session, _ := mgo.Dial("mongodb://localhost/test")
    defer session.Close()
    db := session.DB("test")

    /**
     * つくるところ
    **/
    ritsu := &Person{
        ID:   bson.NewObjectId(),
        Name: "田井中律",
        Age:  17,
    }
    col := db.C("people")
    if err := col.Insert(ritsu); err != nil {
        log.Fatalln(err)
    }

    /**
     * みつけるところ
    **/
    p := new(Person)
    query := db.C("people").Find(bson.M{})
    query.One(&p)

    /**
     * 結果
    **/
    fmt.Printf("%+v\n", p)
    // &{ID:ObjectIdHex("5478517a9871b9b8e42e2ee2") Name:田井中律 Age:17}
}