const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Message } = require('../models/message');
router.get('/:email', (req, res) => {
    Message.find({sender:req.params.email}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving  :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;