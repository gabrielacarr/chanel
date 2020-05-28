const mongoose = require("mongoose");


const comment = mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
   
}, {
    timestamp: true
});

module.exports = mongoose.model("Comment", comment);