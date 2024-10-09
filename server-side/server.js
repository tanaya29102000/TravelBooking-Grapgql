const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://tanayakanerkar:tanu1@cluster1.2vb33.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected Successfully!!"))
  .catch(err => console.log("MongoDB connection error:", err));

const bookingSchema = new mongoose.Schema({
  title: String,
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  departureCountry: String,
  destinationCountry: String,
  departureDate: String,
  returnDate: String,
  classOfService: String,
  organizationName: String,
  preferredAirline: String,
  preferredHotel: String,
  birthDate: String,
  additionalInfo: String
});

const Booking = mongoose.model('Booking', bookingSchema);

const schema = buildSchema(`
  type Booking {
    id: ID!
    title: String
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    departureCountry: String
    destinationCountry: String
    departureDate: String
    returnDate: String
    classOfService: String
    organizationName: String
    preferredAirline: String
    preferredHotel: String
    birthDate: String
    additionalInfo: String
  }

  type Query {
    bookings: [Booking]
    booking(id: ID!): Booking
  }

  type Mutation {
    addBooking(
      title: String!,
      firstName: String!,
      lastName: String!,
      email: String!,
      phoneNumber: String!,
      departureCountry: String!,
      destinationCountry: String!,
      departureDate: String!,
      returnDate: String!,
      classOfService: String,
      organizationName: String,
      preferredAirline: String,
      preferredHotel: String,
      birthDate: String,
      additionalInfo: String
    ): Booking

    deleteBooking(id: ID!): String
  }
`);

// Define resolvers for the schema
const root = {
  bookings: async () => await Booking.find(),
  booking: async ({ id }) => await Booking.findById(id),
  addBooking: async ({ title, firstName, lastName, email, phoneNumber, departureCountry, destinationCountry, departureDate, returnDate, classOfService, organizationName, preferredAirline, preferredHotel, birthDate, additionalInfo }) => {
    const newBooking = new Booking({
      title, firstName, lastName, email, phoneNumber, departureCountry, destinationCountry,
      departureDate, returnDate, classOfService, organizationName, preferredAirline,
      preferredHotel, birthDate, additionalInfo
    });
    await newBooking.save();
    return newBooking;
  },
  deleteBooking: async ({ id }) => {
    const result = await Booking.findByIdAndDelete(id);
    if (result) {
      return 'Booking deleted successfully!';
    } else {
      throw new Error('Booking not found!');
    }
  }
};

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable for PORT

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// RESTful Routes
app.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/bookings', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/bookings/:id', async (req, res) => {
  try {
    const result = await Booking.findByIdAndDelete(req.params.id);
    if (result) {
      res.json({ message: 'Booking deleted successfully!' });
    } else {
      res.status(404).json({ error: 'Booking not found!' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Set up GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable GraphiQL UI for testing queries
}));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
