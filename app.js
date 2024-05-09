// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express")
const app = express()
const morgan = require("morgan")
const projects = require("./data/projects.json")
const port = 5005


// CREATE EXPRESS APP
// Here you should create your Express app:
app.use(express.static("public"))
app.use(express.json())
app.use(morgan("dev"))



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html")
})

app.get("/api/projects", (req, res) => {
    res.json(projects)
})

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(port, ()=> {
    console.log(`Server listening port ${port}`)
})