import Cake from "../models/cake.model.js"




const CakeController = {

    create: async (req, res) => {
        try {
            const newCake = await Cake.create(req.body)
            res.json(newCake)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    ReadAll: async (req, res) => {
        try {
            const AllCakes = await Cake.find()
            res.json(AllCakes)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    ReadOne: async (req, res) => {
        try {
            const OneCake = await Cake.findById(req.params.id)
            res.json(OneCake)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    updateCake: async (req, res) => {
        const options = {
            new: true,
            runValidation: true
        }
        try {
            const UpdatedCake = await Cake.findByIdAndUpdate(req.params.id, req.body, options)
            res.json(UpdatedCake)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    DeleteOneCake: async (req, res) => {
        try {
            await Cake.findByIdAndDelete(req.params.id)
            res.json({ response: " it is Delete successfully " })
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    }
}



export default CakeController


