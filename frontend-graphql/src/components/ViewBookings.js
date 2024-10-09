
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewBookings.css'; // Import the CSS file

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/bookings');
        if (response.status !== 200) {
          throw new Error('Error fetching bookings!');
        }
        setBookings(response.data);
      } catch (err) {
        console.error(err);
        setError('Error fetching bookings! Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/bookings/${id}`);
      setBookings(bookings.filter(booking => booking._id !== id)); // Update state to remove deleted booking
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="booking-list">
      <h2>All Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Departure Country</th>
            <th>Destination Country</th>
            <th>Departure Date</th>
            <th>Return Date</th>
            <th>Class of Service</th>
            <th>Organization</th>
            <th>Preferred Airline</th>
            <th>Preferred Hotel</th>
            <th>Birth Date</th>
            <th>Additional Info</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.lastName}</td>
              <td>{booking.email}</td>
              <td>{booking.phoneNumber}</td>
              <td>{booking.departureCountry}</td>
              <td>{booking.destinationCountry}</td>
              <td>{booking.departureDate}</td>
              <td>{booking.returnDate}</td>
              <td>{booking.classOfService}</td>
              <td>{booking.organizationName}</td>
              <td>{booking.preferredAirline}</td>
              <td>{booking.preferredHotel}</td>
              <td>{booking.birthDate}</td>
              <td>{booking.additionalInfo}</td>
              <td>
                {/* Delete Icon */}
                <span className="delete-icon" onClick={() => handleDelete(booking._id)}>
                  🗑️ {/* You can replace this with an SVG or Font Awesome icon */}
                </span>
                <a href={`/bookings/${booking._id}`}> View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBookings;
