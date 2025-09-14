const express=require("express")
const cors=require("cors")
const mongoose  = require("mongoose")
const  customerrouter = require("./routes/customer")
const servicerouter=require("./routes/service")
const  adminrouter = require("./routes/admin")

require("dotenv").config()


const app =express()
app.use(express.json())
app.use(cors())
const PORT=process.env.port || 3000

mongoose.connect(process.env.db_Url).then(()=>console.log("sucsess concection"))

// app.use("/allImages",express.static("docment"))

app.use(customerrouter)
app.use(servicerouter)
app.use(adminrouter)




app.listen(PORT,()=>console.log(`server is runing ${PORT}`))