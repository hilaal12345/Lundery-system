// const mongoose =require("mongoose")

// const customerSchema=mongoose.Schema({
//     name:{type:String, required:true},
//     phone:{type:Number, required:true},
//     email:{type:String, required:true, unique:true},
//     password:{type:String, required:true}
// },{timestamps:true})
// module.exports=mongoose.model("customer",customerSchema)


const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const customerSchema = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

// Counter gaar ah oo customer
customerSchema.plugin(AutoIncrement, { inc_field: 'prId', id: 'customer_prId' });

module.exports = mongoose.model("customer", customerSchema);
