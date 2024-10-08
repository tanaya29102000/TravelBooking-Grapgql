// schema/schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Booking {
    id: ID!
    title: String
    firstName: String
    lastName: String
    birthDate: String
    organizationName: String
    email: String
    phoneNumber: String
    departureCountry: String
    destinationCountry: String
    departureDate: String
    returnDate: String
    classOfService: String
    preferredHotel: String
    preferredAirline: String
    additionalInfo: String
  }

  type Query {
    bookings: [Booking]
  }

  type Mutation {
    addBooking(
      title: String
      firstName: String
      lastName: String
      birthDate: String
      organizationName: String
      email: String
      phoneNumber: String
      departureCountry: String
      destinationCountry: String
      departureDate: String
      returnDate: String
      classOfService: String
      preferredHotel: String
      preferredAirline: String
      additionalInfo: String
    ): Booking

    deleteBooking(id: ID!): String
  }
`;

module.exports = typeDefs;
