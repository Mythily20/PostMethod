var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([
        {commodityGroupCode:"C001",commodityGroupName:"Fruits",createdBy:"MYS026",createdDate:"2020-01-12"}
     ])
});

router.post('/', urlencodedParser, function(req, res, next) {

    res.json([])

});
module.exports = router;