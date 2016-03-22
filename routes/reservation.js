'use strict'

var express = require('express');
var router = express.Router();

var Reservation = require('../models/reservation');


router.get('/', (req, res) => {
  Reservation.find({}, (err, data) => {
    if(err) {
      return res.status(499).send(err)
    }
    res.send(data);
  })
})

router.post('/', (req, res) => {
  Reservation.create(req.body, (err, reservation) =>{
    if(err) {
      return res.status(499).send(err)
    }
    res.send(reservation);
  })
});

router.put('/', (req, res) => {
  Reservation.findByIdAndUpdate(req.body._id, req.body, (err, reservation) => {
    if(err) {
      return res.status(499).send(err)
    }
    res.end();
  })
})

router.delete('/:id', (req, res) => {
  Reservation.findByIdAndRemove(req.params.id, (err) => {
    if(err) {
      return res.status(499).send(err)
    }
    res.end();
  })
})



module.exports = router;
