//load app server

const express = require('express')
const app = express()


app.get("/", (req, res) => {
    console.log("Responding to Root")
    res.send("Hello from ROOOTT.. !!!")
})

app.get("/users", (req, res) => {
    //var user1={firstName:"William", lastName:"Sorto"}
    //const user2={firstName:"Jose", lastName:"Perez"}
    //res.json([user1, user2])
    
    //res.send("Nodemon auto updates when I save this file")

    const user3=[
        {firstName:"William", lastName:"Sorto"},
        {firstName:"Jose", lastName:"Perez"},
        {firstName:"Jane", lastName:"Doe"}
    ]
    res.json(user3)

})

// localhost:3003
app.listen(3003, () => {
    console.log("Server listening on port 3003...")
})
