const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Message } = require('../models/message');

router.post('/', (req, res) => {
    var msg = new Message({
        sender: req.body.sender,
        receiver: req.body.receiver,
        message: req.body.message
    });
    msg.save((err, doc) => {
        if (!err) { res.send(doc);
            console.log(doc);
         }
        else { console.log('Error in Profile Save :' + JSON.stringify(err)); }
    });
});
router.get('/:email', (req, res) => {
    Message.find({receiver:req.params.email}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving  :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;