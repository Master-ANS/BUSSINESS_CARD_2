const zod = require("zod");

const check = zod.object({
    name : zod.string(),
    Description : zod.string(), 
    Social_media : zod.string(),
    Interest : zod.string(),
    Seen : zod.string()
})

const checkId = zod.object({
    id : zod.string()
})

module.exports = {
    Cardtype : check,
    checkId : checkId
}