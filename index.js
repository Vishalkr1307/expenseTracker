const express=require("express")
const app = express()
const db=require("./config/db")
const Task=require("./route/task")


app.use(express.json())
app.use("/task",Task)
// app.use(express.static(path.join(__dirname))

const port=2345
db.sync().then(()=>{
    app.listen(port,()=>{
        console.log('listening on port')
    })
})

