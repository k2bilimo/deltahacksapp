const express = require('express');
const router = express.Router();

router.post(`/api/pills`,function(req, res, next){
    console.log("We got here")
})
router.get('/', function(req,res,next)){
    console.log("get achieved")
}
module.exports = router;
