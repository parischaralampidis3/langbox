const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let PasswordResetSchema = new Schema({
        userId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: "user",
                unique: true,
        },
        token: {
                type: String,
                required: true
        },
        createdAt: {
                type: Date,
                default: Date.now,
                expires: 3600
        },
});

const UserVerification = mongoose.model("Token", PasswordResetSchema);

module.exports = UserVerification;