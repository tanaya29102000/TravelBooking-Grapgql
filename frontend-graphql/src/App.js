// import React from 'react';
// import AddBooking from './components/AddBooking';
// import ViewBookings from './components/ViewBookings';
// import './App.css';
// import Navbar from "./components/Navbar";


// function App() {
//   return (
//     <div className="App">
//       <h1>Travel Booking System</h1>
//       <AddBooking />
//       <ViewBookings />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Assuming Navbar is in the components folder
import AddBooking from './components/AddBooking';  // Assuming AddBooking is in the components folder
import ViewBookings from './components/ViewBookings';  // Assuming ViewBookings is in the components folder

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar will be visible on all routes */}
        <Navbar />

        {/* Defining the routes for the application */}
        <Routes>
          <Route path="/add-booking" element={<AddBooking />} />
          <Route path="/view-bookings" element={<ViewBookings />} />
          {/* Add a default route or home page if necessary */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

