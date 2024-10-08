// models/Booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  title: String,
  firstName: String,
  lastName: String,
  birthDate: Date,
  organizationName: String,
  email: String,
  phoneNumber: String,
  departureCountry: String,
  destinationCountry: String,
  departureDate: Date,
  returnDate: Date,
  classOfService: String,
  preferredHotel: String,
  preferredAirline: String,
  additionalInfo: String
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
