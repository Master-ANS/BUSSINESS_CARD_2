const express = require("express");
const bodyparser = require("body-parser");

const {CARD} = require("./db");
const {Cardtype , checkId} = require("./zodtype")

const cors = require("cors");
const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());


app.post("/creating" ,async (req,res)=>{
    const createData = req.body;
    const checkData = Cardtype.safeParse(createData);
    if(!checkData){
        res.status(500).json({
            msg : "there is some isue with the input provided"
        })
    }

    await CARD.create({
        Name : createData.name,
        Description : createData.description,
        Social_media : createData.social_media,
        Interest : createData.interest,
        Seen  : createData.seen
    })

    res.json({
        msg : "The card have been created and saved successfully"
    })
})

app.get("/gettingCards", async (req, res) => {
    const Cards = await CARD.find({});
    res.json({
        Cards
    });
});

app.put("/makeChange" , async(req,res)=>{
    const getId = req.body.id;
    const checkData = checkId.safeParse(getId);

    if(!checkData){
        res.status(500).json({
            msg : "There is some issue with the id generated"
        })
    }

    await CARD.updateOne({
        _id : getId
    } , {
        Seen : true
    })

    res.json({
        msg : "you are marked as seen by others"
    })
})

app.listen(port , ()=>{
    console.log(`now listening to ${port}`)
})


