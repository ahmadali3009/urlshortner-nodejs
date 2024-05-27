let mongoose = require("mongoose");

let urlSchema = new mongoose.Schema({
    shortId: {
        type : String,
        required: true,
       
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitHistory: [{
        timestamp : {type : Number}
    }],

    createdBy: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
    },

},
{timestamps : true} 
)

let url = mongoose.model("url" , urlSchema)
module.exports = url;