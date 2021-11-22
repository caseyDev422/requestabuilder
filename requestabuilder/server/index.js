require("dotenv").config()

const app = require("./api/server")

const port = 8080

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})