// // import React from 'react';
// // import { useQuery, gql } from '@apollo/client';

// // const GET_BOOKINGS = gql`
// //   query GetBookings {
// //     bookings {
// //       id
// //       title
// //       firstName
// //       lastName
// //       email
// //       phoneNumber
// //       departureCountry
// //       destinationCountry
// //       departureDate
// //       returnDate
// //       classOfService
// //       organizationName
// //       preferredAirline
// //       preferredHotel
// //       birthDate
// //       additionalInfo
// //     }
// //   }
// // `;

// // const ViewBookings = () => {
// //   const { loading, error, data } = useQuery(GET_BOOKINGS);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>Error: {error.message}</p>;

// //   return (
// //     <div>
// //       <h2>View Bookings</h2>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>ID</th>
// //             <th>Title</th>
// //             <th>First Name</th>
// //             <th>Last Name</th>
// //             <th>Email</th>
// //             <th>Phone</th>
// //             <th>Departure Country</th>
// //             <th>Destination Country</th>
// //             <th>Departure Date</th>
// //             <th>Return Date</th>
// //             <th>Class of Service</th>
// //             <th>Organization</th>
// //             <th>Preferred Airline</th>
// //             <th>Preferred Hotel</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {data.bookings.map((booking) => (
// //             <tr key={booking.id}>
// //               <td>{booking.id}</td>
// //               <td>{booking.title}</td>
// //               <td>{booking.firstName}</td>
// //               <td>{booking.lastName}</td>
// //               <td>{booking.email}</td>
// //               <td>{booking.phoneNumber}</td>
// //               <td>{booking.departureCountry}</td>
// //               <td>{booking.destinationCountry}</td>
// //               <td>{booking.departureDate}</td>
// //               <td>{booking.returnDate}</td>
// //               <td>{booking.classOfService}</td>
// //               <td>{booking.organizationName}</td>
// //               <td>{booking.preferredAirline}</td>
// //               <td>{booking.preferredHotel}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default ViewBookings;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const ViewBooking = () => {
//   const { id } = useParams(); // Extract booking ID from the URL
//   const [booking, setBooking] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!id) {
//       setError('Invalid booking ID!');
//       return;
//     }

//     const fetchBooking = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/bookings/${id}`);

//         if (response.status !== 200) {
//           throw new Error('Error fetching booking details!');
//         }

//         setBooking(response.data);
//       } catch (err) {
//         console.error(err);
//         setError('Error fetching booking details! Please try again.');
//       }
//     };

//     fetchBooking();
//   }, [id]);

//   if (error) {
//     return <div className="error">{error}</div>;
//   }

//   if (!booking) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="booking-details">
//       <h2>Booking Details</h2>
//       <table>
//         <tbody>
//           <tr>
//             <th>Field</th>
//             <th>Value</th>
//           </tr>
//           <tr>
//             <td>Title</td>
//             <td>{booking.title}</td>
//           </tr>
//           <tr>
//             <td>First Name</td>
//             <td>{booking.firstName}</td>
//           </tr>
//           <tr>
//             <td>Last Name</td>
//             <td>{booking.lastName}</td>
//           </tr>
//           <tr>
//             <td>Email</td>
//             <td>{booking.email}</td>
//           </tr>
//           <tr>
//             <td>Phone Number</td>
//             <td>{booking.phoneNumber}</td>
//           </tr>
//           <tr>
//             <td>Departure Country</td>
//             <td>{booking.departureCountry}</td>
//           </tr>
//           <tr>
//             <td>Destination Country</td>
//             <td>{booking.destinationCountry}</td>
//           </tr>
//           <tr>
//             <td>Departure Date</td>
//             <td>{booking.departureDate}</td>
//           </tr>
//           <tr>
//             <td>Return Date</td>
//             <td>{booking.returnDate}</td>
//           </tr>
//           <tr>
//             <td>Class of Service</td>
//             <td>{booking.classOfService}</td>
//           </tr>
//           <tr>
//             <td>Organization Name</td>
//             <td>{booking.organizationName}</td>
//           </tr>
//           <tr>
//             <td>Preferred Airline</td>
//             <td>{booking.preferredAirline}</td>
//           </tr>
//           <tr>
//             <td>Preferred Hotel</td>
//             <td>{booking.preferredHotel}</td>
//           </tr>
//           <tr>
//             <td>Birth Date</td>
//             <td>{booking.birthDate}</td>
//           </tr>
//           <tr>
//             <td>Additional Info</td>
//             <td>{booking.additionalInfo}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewBooking;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         // Update the URL to match the correct endpoint
//         const response = await axios.get('http://localhost:5000/bookings'); 

//         if (response.status !== 200) {
//           throw new Error('Error fetching bookings!');
//         }

//         setBookings(response.data); // Assuming your API returns an array of bookings
//       } catch (err) {
//         console.error(err);
//         setError('Error fetching bookings! Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">{error}</div>;
//   }

//   return (
//     <div className="booking-list">
//       <h2>All Bookings</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Phone Number</th>
//             <th>Departure Country</th>
//             <th>Destination Country</th>
//             <th>Departure Date</th>
//             <th>Return Date</th>
//             <th>Class of Service</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking) => (
//             <tr key={booking.id}>
//               <td>{booking.title}</td>
//               <td>{booking.firstName}</td>
//               <td>{booking.lastName}</td>
//               <td>{booking.email}</td>
//               <td>{booking.phoneNumber}</td>
//               <td>{booking.departureCountry}</td>
//               <td>{booking.destinationCountry}</td>
//               <td>{booking.departureDate}</td>
//               <td>{booking.returnDate}</td>
//               <td>{booking.classOfService}</td>
//               <td>
//                 {/* Example: Link to view individual booking details */}
//                 <a href={`/bookings/${booking.id}`}>View</a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewBookings;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Update the URL to match the correct endpoint
        const response = await axios.get('http://localhost:5000/bookings');

        if (response.status !== 200) {
          throw new Error('Error fetching bookings!');
        }

        setBookings(response.data); // Assuming your API returns an array of bookings
      } catch (err) {
        console.error(err);
        setError('Error fetching bookings! Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

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
                {/* Example: Link to view individual booking details */}
                <a href={`/bookings/${booking._id}`}>View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBookings;
