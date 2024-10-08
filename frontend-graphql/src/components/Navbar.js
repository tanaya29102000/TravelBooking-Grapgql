// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';  // Ensure this file exists with the CSS for the Navbar

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h2 className="navbar-logo">Travel Booking</h2>
//       <ul className="navbar-links">
//         <li><Link to="/add-booking">Add Booking</Link></li>
//         <li><Link to="/view-bookings">View Bookings</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Ensure this file exists with the CSS for the Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Travel Booking</h2>
      <ul className="navbar-links">
        <li><Link to="/add-booking">Add Booking</Link></li>
        <li><Link to="/view-bookings">View Bookings</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
