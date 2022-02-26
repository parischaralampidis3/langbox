const mongoose = require ("mongoose");
const Schema = mongoose.Schema;


let PasswordResetSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    resetString:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    },
    expiresAt:{
        type:Date
    },
});

const Userverification = mongoose.model("PasswordReset",PasswordResetSchema);

module.exports =PasswordReset;