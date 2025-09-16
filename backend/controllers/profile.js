// const profileModel=require("../models/profile")

// const createProfile = async (req, res) => {
//     try {
//         const { name, bio  } = req.body
//         const newData = profileModel({
//             name: name,
//             bio:bio,
//             pImage: req.file.filename
//         })
//         await newData.save()
//         res.send(newData)
//     } catch (error) {
//         res.status(400).json({ message: error.message })
//     }

// }

// module.exports={createProfile}


const profileModel = require("../models/profile")

const createProfile = async (req, res) => {
  try {
    const { name, bio } = req.body
    const newProfile =profileModel({
      name,
      bio,
      pImage: req.file ? req.file.filename : undefined
    })

    await newProfile.save()
    res.status(201).json(newProfile)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = { createProfile }
