let mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://admin:admin@api-kztvf.mongodb.net/test?retryWrites=true&w=majority`)

let CustomerSchema = new mongoose.Schema(
    {
        name:String,
        email:{
            type:String,
            required:true,
            unique:true
        }
    }
)

module.exports = mongoose.model('Customers', CustomerSchema)