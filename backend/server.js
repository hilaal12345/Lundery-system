const express=require("express")
const cors=require("cors")
const mongoose  = require("mongoose")
const  customerrouter = require("./routes/customer")
const  order=require("./routes/orderrouter")
const  adminrouter = require("./routes/admin")
const  orderRouter = require("./routes/orderrouter")
const  ServiceRouter = require("./routes/service")
const  Forget = require("./routes/forget")
const  profile = require("./routes/profile")


require("dotenv").config()


const app =express()
app.use(express.json())
app.use(cors())
const PORT=process.env.port || 3000

mongoose.connect(process.env.db_Url).then(()=>console.log("sucsess concection"))

app.use("/allImages",express.static("document"))

app.use(customerrouter)
app.use(ServiceRouter)
app.use(adminrouter)
app.use(orderRouter)

app.use(order)
app.use(Forget)
app.use(profile)




app.listen(PORT,()=>console.log(`server is runing ${PORT}`))