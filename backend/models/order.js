const  mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    customer: {
        type:String,
        required: true
    },
    services: [
        {
            serviceId:{type: mongoose.Schema.Types.ObjectId, ref:"service", required: true},
            quantity:{type: Number, required: true} 

        }
    ],
    TotalAmount: {type: Number, required: true}
})

module.exports = mongoose.model("order", orderSchema)