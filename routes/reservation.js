const express = require("express");
const router = express.Router();
const Reservation = require("../models/reservation");
var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
  service: 'gmail',
  auth: {
    user: '1341452029zsr',
    pass: 'zsr739146739146'
  }
});
//Get all reservations
router.get("/", function (req, res) {
  Reservation.find().then(function (reservations) {
    res.send(reservations);
  });
});

//Retrive reservation by Id
router.get("/:id", function (req, res, next) {
  Reservation.findById({ _id: req.params.id }).then(function (reservation) {
    res.send(reservation);
  });
});

//Retrive reservations by experience id
router.get("/experience/:id", function (req, res, next) {
  Reservation.find({ experience: req.params.id }).then(function (reservations) {
    res.send(reservations);
  });
});

//Retrive reservations by shadower id
router.get("/shadower/:id", function (req, res, next) {
  Reservation.find({ shadower: req.params.id }).then(function (reservations) {
    res.send(reservations);
  });
});

//Retrive reservations by host id
router.get("/host/:id", function (req, res, next) {
  Reservation.find({ host: req.params.id }).then(function (reservations) {
    res.send(reservations);
  });
});

//Create and save new reservation instance
router.post("/", function (req, res, next) {
  Reservation.create(req.body)
    .then(function (reservation) {
      res.send(reservation); //send back info to client
    })
    .catch(next);
});

//Edit reservation
router.put("/:id", function (req, res, next) {
            var mailOptions = {
            from: '1341452029zsr@gmail.com',
            to: req.body.shadowerEmail,
            subject: 'Yolo Shadow Host Application Received!',
            text: 'Dear '+req.body.shadowerFname+', You have requested an reservation!'
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
  //find and update specific application
  Reservation.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
    function () {
      //find and send back updated application for display
      Reservation.findById({ _id: req.params.id }).then(function (reservation) {
        res.send(reservation);
      });
    }
  );
});

//Delete reservation
router.delete("/:id", function (req, res, next) {
  Reservation.findByIdAndRemove({ _id: req.params.id }).then(function (
    reservation
  ) {
    res.send(reservation);
  });
});

module.exports = router;
