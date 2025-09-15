const servicemodel=require("../models/servicemodel")
//create
const createService=async(req,res)=>{
          try{
                    const {name,desc,price,kg,category}= req.body
                    const newData=servicemodel({
                              name:name,
                              desc:desc,
                              price:price,
                              kg:kg,
                              category:category
                    })
                     await newData.save()
                    res.send(newData)
          } catch (error) {
                    res.status(400).json({ message: error.message })
          }

}

//read 
const readService=async(req,res)=>{
           try{
        const {category} = req.body || {}

        let filterData = {}

        if(category){
            filterData = {category}
        }
        const readData = await servicemodel.find(filterData)
        if(readData){
            res.send(readData)
        }
    } catch(error) {
        res.status(400).json({message: error.message})

    }
}

//read single
const readSingleService = async(req,res) => {
    try{
        const getData = await servicemodel.find({_id: req.params.id})
        if(getData){
        res.send(getData)
    }
    } catch(error){
        res.status(400).json({message: error.message})

    }
}
//update
const updateService=async(req,res)=>{
          try{
        const { name, price, desc, kg,category } = req.body
        const updateData = await productModel.updateOne(
            {_id: req.params.id},
            {$set: {
                    name:name,
                    desc:desc,
                    price:price,
                    kg:kg,
                    category:category
               

            }}
        )
        if(updateData){
            res.send("succes update")
        }
    } catch(error){
        res.status(400).json({message: error.message})
    }
}
   
//delet
const deletService=async(req,res)=>{
          try{
        const deleteData = await servicemodel.deleteOne({_id:req.params.id})
        if(deleteData){
            res.send("succes delete")
        }
    } catch(error){
        res.status(400).json({message: error.message})
    }
}


module.exports={createService,readService,readSingleService,updateService,deletService}