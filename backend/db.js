const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/BUSSINESS_CARD")

const cardSchema = new mongoose.Schema({
    Name : String,
    Description : String,
    Social_media : String,
    Interset : String,
    Seen : Boolean,
})


const CARDS = mongoose.model("CARDS" , cardSchema);

module.exports = {
    CARD : CARDS
}