
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Assuming Navbar is in the components folder
import AddBooking from './components/AddBooking';  // Assuming AddBooking is in the components folder
import ViewBookings from './components/ViewBookings';  // Assuming ViewBookings is in the components folder

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        {/* Defining the routes for the application */}
        <Routes>
          <Route path="/add-booking" element={<AddBooking />} />
          <Route path="/view-bookings" element={<ViewBookings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

