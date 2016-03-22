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

//get today
// router.get('/today', function(req, res, next){
//   Reservation.find({time: {'$gte': startOfToday, '$lte' : endOfToday}}, function(err, appointments){
//     if(err) return res.status(499).send(err);
//     res.send(reservations);
//   })
// })

router.post('/', (req, res) => {
  Reservation.create(req.body, (err, reservation) =>{
    if(err) {
      return res.status(499).send(err)
    }
    res.send(reservation);
  })
});

//toggle check in
// router.put('/:id/checkin', function(req, res){
//   Reservation.findById(req.params.id, function(err, reservation){
//     if (err) return res.status(499).send(err);
//     reservation.checkedIn = !reservation.checkedIn;
//     reservation.save(function(err, savedReservation){
//       res.status(err ? 499 : 200).send(err || savedReservation);
//     })
//   })
// })

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
