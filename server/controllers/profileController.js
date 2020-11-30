const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Profile } = require('../models/profile');
router.post('/', (req, res) => {
    var pro = new Profile({
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        qualification: req.body.qualification,
        specialization: req.body.specialization,
        experience : req.body.experience,
        prodesc : req.body.prodesc

    });
    pro.save((err, doc) => {
        if (!err) { res.send(doc);
            console.log(doc);
         }
        else { console.log('Error in Profile Save :' + JSON.stringify(err)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var updatepro = {
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        qualification: req.body.qualification,
        specialization: req.body.specialization,
        experience : req.body.experience,
        prodesc : req.body.prodesc
    };
    Profile.findByIdAndUpdate(req.params.id, { $set: updatepro }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Profile Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:email', (req, res) => {
    Profile.find({email:req.params.email}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving  :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;