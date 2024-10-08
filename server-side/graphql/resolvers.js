// resolvers/resolvers.js
const Booking = require('../models/Booking');

const resolvers = {
  Query: {
    bookings: async () => {
      return await Booking.find();
    }
  },
  Mutation: {
    addBooking: async (_, { title, firstName, lastName, birthDate, organizationName, email, phoneNumber, departureCountry, destinationCountry, departureDate, returnDate, classOfService, preferredHotel, preferredAirline, additionalInfo }) => {
      const newBooking = new Booking({
        title,
        firstName,
        lastName,
        birthDate,
        organizationName,
        email,
        phoneNumber,
        departureCountry,
        destinationCountry,
        departureDate,
        returnDate,
        classOfService,
        preferredHotel,
        preferredAirline,
        additionalInfo
      });
      await newBooking.save();
      return newBooking;
    },
    deleteBooking: async (_, { id }) => {
      await Booking.findByIdAndDelete(id);
      return `Booking with id ${id} deleted.`;
    }
  }
};

module.exports = resolvers;
