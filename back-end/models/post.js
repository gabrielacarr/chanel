const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const post = mongoose.Schema({
    title: {
        type: String,
       
    },
    description:{
        type: String,
       
    },
    imgUrl:{
        type: String,
       
    },
    category:{
        type: String,
        // ref: "Category"
    },
    // timestamp: {
    //     type: String,
    //    
    // }
    comments: [{
        type: ObjectId,
        ref: 'Comment'
    }]
})

module.exports = mongoose.model("Post", post)