
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import Swal from 'sweetalert2'; // Import SweetAlert2
// // import './AddBooking.css'; // Ensure to import the CSS file

// // const AddBooking = () => {
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     firstName: '',
// //     lastName: '',
// //     birthDate: '',
// //     organizationName: '',
// //     email: '',
// //     phoneNumber: '',
// //     departureCountry: '',
// //     destinationCountry: '',
// //     departureDate: '',
// //     returnDate: '',
// //     classOfService: '',
// //     preferredHotel: '',
// //     preferredAirline: '',
// //     additionalInfo: ''
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');

// //     // Choose to use GraphQL or REST API
// //     const useGraphQL = true; // Change to false to use REST API

// //     try {
// //       if (useGraphQL) {
// //         const mutation = `
// //           mutation {
// //             addBooking(
// //               title: "${formData.title}",
// //               firstName: "${formData.firstName}",
// //               lastName: "${formData.lastName}",
// //               birthDate: "${formData.birthDate}",
// //               organizationName: "${formData.organizationName}",
// //               email: "${formData.email}",
// //               phoneNumber: "${formData.phoneNumber}",
// //               departureCountry: "${formData.departureCountry}",
// //               destinationCountry: "${formData.destinationCountry}",
// //               departureDate: "${formData.departureDate}",
// //               returnDate: "${formData.returnDate}",
// //               classOfService: "${formData.classOfService}",
// //               preferredHotel: "${formData.preferredHotel}",
// //               preferredAirline: "${formData.preferredAirline}",
// //               additionalInfo: "${formData.additionalInfo}"
// //             ) {
// //               id
// //               firstName
// //               lastName
// //             }
// //           }
// //         `;

// //         const response = await axios.post('http://localhost:5000/graphql', { query: mutation });

// //         if (response.data.errors) {
// //           throw new Error(response.data.errors[0].message);
// //         }

// //         console.log(response.data);
// //         // Use SweetAlert for success message
// //         await Swal.fire({
// //           icon: 'success',
// //           title: 'Success!',
// //           text: 'Booking added successfully!',
// //         });

// //       } else {
// //         // REST API endpoint for adding booking
// //         const response = await axios.post('http://localhost:5000/api/bookings', formData);

// //         if (response.status !== 201) {
// //           throw new Error('Failed to add booking');
// //         }

// //         // Use SweetAlert for success message
// //         await Swal.fire({
// //           icon: 'success',
// //           title: 'Success!',
// //           text: 'Booking added successfully via REST API!',
// //         });
// //       }

// //       // Reset form data after successful submission
// //       setFormData({
// //         title: '',
// //         firstName: '',
// //         lastName: '',
// //         birthDate: '',
// //         organizationName: '',
// //         email: '',
// //         phoneNumber: '',
// //         departureCountry: '',
// //         destinationCountry: '',
// //         departureDate: '',
// //         returnDate: '',
// //         classOfService: '',
// //         preferredHotel: '',
// //         preferredAirline: '',
// //         additionalInfo: ''
// //       });
// //     } catch (err) {
// //       console.error(err);
// //       setError('Error adding booking! Please try again.');
// //       // Use SweetAlert for error message
// //       await Swal.fire({
// //         icon: 'error',
// //         title: 'Error!',
// //         text: 'Error adding booking! Please try again.',
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="booking-container">
// //       {/* Left Side - Image */}
// //       <div className="image-container">
// //         <img src="Travel.png" alt="Travel" />
// //       </div>

// //       {/* Right Side - Form */}
// //       <div className="form-container">
// //         <h2>Travel Information Form</h2>
// //         {error && <p className="error">{error}</p>}
// //         <form onSubmit={handleSubmit}>
// //           <select name="title" onChange={handleChange} value={formData.title} required>
// //             <option value="">Please Select</option>
// //             <option value="Mr">Mr</option>
// //             <option value="Ms">Ms</option>
// //             <option value="Mrs">Mrs</option>
// //           </select>
// //           <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} required />
// //           <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} required />
// //           <input type="date" name="birthDate" onChange={handleChange} value={formData.birthDate} required />
// //           <input type="text" name="organizationName" placeholder="Organization Name" onChange={handleChange} value={formData.organizationName} />
// //           <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
// //           <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} value={formData.phoneNumber} required />
// //           <select name="departureCountry" onChange={handleChange} value={formData.departureCountry} required>
// //             <option value="">Please Select</option>
// //             <option value="USA">USA</option>
// //             <option value="India">India</option>
// //             {/* Add more countries as needed */}
// //           </select>
// //           <select name="destinationCountry" onChange={handleChange} value={formData.destinationCountry} required>
// //             <option value="">Please Select</option>
// //             <option value="USA">USA</option>
// //             <option value="India">India</option>
// //             {/* Add more countries as needed */}
// //           </select>
// //           <input type="date" name="departureDate" onChange={handleChange} value={formData.departureDate} required />
// //           <input type="date" name="returnDate" onChange={handleChange} value={formData.returnDate} />
// //           <select name="classOfService" onChange={handleChange} value={formData.classOfService} required>
// //             <option value="">Select Class of Service</option>
// //             <option value="Economy">Economy</option>
// //             <option value="Business">Business</option>
// //             <option value="First Class">First Class</option>
// //           </select>
// //           <input type="text" name="preferredHotel" placeholder="Preferred Hotel" onChange={handleChange} value={formData.preferredHotel} />
// //           <input type="text" name="preferredAirline" placeholder="Preferred Airline" onChange={handleChange} value={formData.preferredAirline} />
// //           <textarea name="additionalInfo" placeholder="Additional Information" onChange={handleChange} value={formData.additionalInfo}></textarea>
// //           <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Booking'}</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddBooking;
// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2'; // Import SweetAlert2
// import './AddBooking.css'; // Ensure to import the CSS file

// const AddBooking = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     firstName: '',
//     lastName: '',
//     birthDate: '',
//     organizationName: '',
//     email: '',
//     phoneNumber: '',
//     departureCountry: '',
//     destinationCountry: '',
//     departureDate: '',
//     returnDate: '',
//     classOfService: '',
//     preferredHotel: '',
//     preferredAirline: '',
//     additionalInfo: ''
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     // Choose to use GraphQL or REST API
//     const useGraphQL = true; // Change to false to use REST API

//     try {
//       if (useGraphQL) {
//         const mutation = `
//           mutation {
//             addBooking(
//               title: "${formData.title}",
//               firstName: "${formData.firstName}",
//               lastName: "${formData.lastName}",
//               birthDate: "${formData.birthDate}",
//               organizationName: "${formData.organizationName}",
//               email: "${formData.email}",
//               phoneNumber: "${formData.phoneNumber}",
//               departureCountry: "${formData.departureCountry}",
//               destinationCountry: "${formData.destinationCountry}",
//               departureDate: "${formData.departureDate}",
//               returnDate: "${formData.returnDate}",
//               classOfService: "${formData.classOfService}",
//               preferredHotel: "${formData.preferredHotel}",
//               preferredAirline: "${formData.preferredAirline}",
//               additionalInfo: "${formData.additionalInfo}"
//             ) {
//               id
//               firstName
//               lastName
//             }
//           }
//         `;

//         const response = await axios.post('http://localhost:5000/graphql', { query: mutation });

//         if (response.data.errors) {
//           throw new Error(response.data.errors[0].message);
//         }

//         console.log(response.data);
//         await Swal.fire({
//           icon: 'success',
//           title: 'Success!',
//           text: 'Booking added successfully!',
//         });

//       } else {
//         const response = await axios.post('http://localhost:5000/api/bookings', formData);

//         if (response.status !== 201) {
//           throw new Error('Failed to add booking');
//         }

//         await Swal.fire({
//           icon: 'success',
//           title: 'Success!',
//           text: 'Booking added successfully via REST API!',
//         });
//       }

//       setFormData({
//         title: '',
//         firstName: '',
//         lastName: '',
//         birthDate: '',
//         organizationName: '',
//         email: '',
//         phoneNumber: '',
//         departureCountry: '',
//         destinationCountry: '',
//         departureDate: '',
//         returnDate: '',
//         classOfService: '',
//         preferredHotel: '',
//         preferredAirline: '',
//         additionalInfo: ''
//       });
//     } catch (err) {
//       console.error(err);
//       setError('Error adding booking! Please try again.');
//       await Swal.fire({
//         icon: 'error',
//         title: 'Error!',
//         text: 'Error adding booking! Please try again.',
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="booking-container">
//       <div className="image-container">
//         <img src="Travel.png" alt="Travel" />
//       </div>

//       <div className="form-container">
//         <h2>Travel Information Form</h2>
//         {error && <p className="error">{error}</p>}
//         <form onSubmit={handleSubmit}>

//           <label htmlFor="title">Title:</label>
//           <select name="title" id="title" onChange={handleChange} value={formData.title} required>
//             <option value="">Please Select</option>
//             <option value="Mr">Mr</option>
//             <option value="Ms">Ms</option>
//             <option value="Mrs">Mrs</option>
//           </select>

//           <label htmlFor="firstName">First Name:</label>
//           <input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} required />

//           <label htmlFor="lastName">Last Name:</label>
//           <input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} required />

//           <label htmlFor="birthDate">Birth Date:</label>
//           <input type="date" name="birthDate" id="birthDate" onChange={handleChange} value={formData.birthDate} required />

//           <label htmlFor="organizationName">Organization Name:</label>
//           <input type="text" name="organizationName" id="organizationName" placeholder="Organization Name" onChange={handleChange} value={formData.organizationName} />

//           <label htmlFor="email">Email:</label>
//           <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} value={formData.email} required />

//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" onChange={handleChange} value={formData.phoneNumber} required />

//           <label htmlFor="departureCountry">Departure Country:</label>
//           <select name="departureCountry" id="departureCountry" onChange={handleChange} value={formData.departureCountry} required>
//             <option value="">Please Select</option>
//             <option value="USA">USA</option>
//             <option value="India">India</option>
//             {/* Add more countries as needed */}
//           </select>

//           <label htmlFor="destinationCountry">Destination Country:</label>
//           <select name="destinationCountry" id="destinationCountry" onChange={handleChange} value={formData.destinationCountry} required>
//             <option value="">Please Select</option>
//             <option value="USA">USA</option>
//             <option value="India">India</option>
//             {/* Add more countries as needed */}
//           </select>

//           <label htmlFor="departureDate">Departure Date:</label>
//           <input type="date" name="departureDate" id="departureDate" onChange={handleChange} value={formData.departureDate} required />

//           <label htmlFor="returnDate">Return Date:</label>
//           <input type="date" name="returnDate" id="returnDate" onChange={handleChange} value={formData.returnDate} />

//           <label htmlFor="classOfService">Class of Service:</label>
//           <select name="classOfService" id="classOfService" onChange={handleChange} value={formData.classOfService} required>
//             <option value="">Select Class of Service</option>
//             <option value="Economy">Economy</option>
//             <option value="Business">Business</option>
//             <option value="First Class">First Class</option>
//           </select>

//           <label htmlFor="preferredHotel">Preferred Hotel:</label>
//           <input type="text" name="preferredHotel" id="preferredHotel" placeholder="Preferred Hotel" onChange={handleChange} value={formData.preferredHotel} />

//           <label htmlFor="preferredAirline">Preferred Airline:</label>
//           <input type="text" name="preferredAirline" id="preferredAirline" placeholder="Preferred Airline" onChange={handleChange} value={formData.preferredAirline} />

//           <label htmlFor="additionalInfo">Additional Information:</label>
//           <textarea name="additionalInfo" id="additionalInfo" placeholder="Additional Information" onChange={handleChange} value={formData.additionalInfo}></textarea>

//           <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Booking'}</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddBooking;


import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // SweetAlert2 for alert popups
import './AddBooking.css'; // Ensure CSS file for styling

const AddBooking = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    organizationName: '',
    email: '',
    phoneNumber: '',
    departureCountry: '',
    destinationCountry: '',
    departureDate: '',
    returnDate: '',
    classOfService: '',
    preferredHotel: '',
    preferredAirline: '',
    additionalInfo: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Toggle between GraphQL and REST API usage
    const useGraphQL = true;

    try {
      if (useGraphQL) {
        const mutation = `
          mutation {
            addBooking(
              title: "${formData.title}",
              firstName: "${formData.firstName}",
              lastName: "${formData.lastName}",
              birthDate: "${formData.birthDate}",
              organizationName: "${formData.organizationName}",
              email: "${formData.email}",
              phoneNumber: "${formData.phoneNumber}",
              departureCountry: "${formData.departureCountry}",
              destinationCountry: "${formData.destinationCountry}",
              departureDate: "${formData.departureDate}",
              returnDate: "${formData.returnDate}",
              classOfService: "${formData.classOfService}",
              preferredHotel: "${formData.preferredHotel}",
              preferredAirline: "${formData.preferredAirline}",
              additionalInfo: "${formData.additionalInfo}"
            ) {
              id
              firstName
              lastName
            }
          }
        `;

        const response = await axios.post('http://localhost:5000/graphql', { query: mutation });
        if (response.data.errors) {
          throw new Error(response.data.errors[0].message);
        }

        await Swal.fire({
          icon: 'success',
          title: 'Booking Added',
          text: 'Your booking was added successfully!',
        });
      } else {
        const response = await axios.post('http://localhost:5000/api/bookings', formData);
        if (response.status !== 201) {
          throw new Error('Failed to add booking.');
        }

        await Swal.fire({
          icon: 'success',
          title: 'Booking Added',
          text: 'Booking added successfully via REST API!',
        });
      }

      setFormData({
        title: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        organizationName: '',
        email: '',
        phoneNumber: '',
        departureCountry: '',
        destinationCountry: '',
        departureDate: '',
        returnDate: '',
        classOfService: '',
        preferredHotel: '',
        preferredAirline: '',
        additionalInfo: ''
      });
    } catch (err) {
      console.error(err);
      setError('Error adding booking! Please try again.');
      await Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to add the booking. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-container">
      <div className="image-container">
        <img src="Travel.png" alt="Travel" />
      </div>

      <div className="form-container">
        <h2>Travel Information Form</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="title">Title:</label>
              <select name="title" id="title" onChange={handleChange} value={formData.title} required>
                <option value="">Please Select</option>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
              </select>
            </div>

            <div className="form-column">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={formData.firstName}
                required
              />
            </div>
          </div>

          {/* More fields */}
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName}
                required
              />
            </div>

            <div className="form-column">
              <label htmlFor="birthDate">Birth Date:</label>
              <input
                type="date"
                name="birthDate"
                id="birthDate"
                onChange={handleChange}
                value={formData.birthDate}
                required
              />
            </div>
          </div>

          {/* Additional fields */}
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>

            <div className="form-column">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                onChange={handleChange}
                value={formData.phoneNumber}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="organizationName">Organization Name:</label>
              <input
                type="text"
                name="organizationName"
                id="organizationName"
                placeholder="Organization Name"
                onChange={handleChange}
                value={formData.organizationName}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="departureCountry">Departure Country:</label>
              <input
                type="text"
                name="departureCountry"
                id="departureCountry"
                placeholder="Departure Country"
                onChange={handleChange}
                value={formData.departureCountry}
                required
              />
            </div>

            <div className="form-column">
              <label htmlFor="destinationCountry">Destination Country:</label>
              <input
                type="text"
                name="destinationCountry"
                id="destinationCountry"
                placeholder="Destination Country"
                onChange={handleChange}
                value={formData.destinationCountry}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="departureDate">Departure Date:</label>
              <input
                type="date"
                name="departureDate"
                id="departureDate"
                onChange={handleChange}
                value={formData.departureDate}
                required
              />
            </div>

            <div className="form-column">
              <label htmlFor="returnDate">Return Date:</label>
              <input
                type="date"
                name="returnDate"
                id="returnDate"
                onChange={handleChange}
                value={formData.returnDate}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="classOfService">Class of Service:</label>
              <select name="classOfService" id="classOfService" onChange={handleChange} value={formData.classOfService} required>
                <option value="">Please Select</option>
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First Class">First Class</option>
              </select>
            </div>

            <div className="form-column">
              <label htmlFor="preferredHotel">Preferred Hotel:</label>
              <input
                type="text"
                name="preferredHotel"
                id="preferredHotel"
                placeholder="Preferred Hotel"
                onChange={handleChange}
                value={formData.preferredHotel}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="preferredAirline">Preferred Airline:</label>
              <input
                type="text"
                name="preferredAirline"
                id="preferredAirline"
                placeholder="Preferred Airline"
                onChange={handleChange}
                value={formData.preferredAirline}
              />
            </div>

            <div className="form-column">
              <label htmlFor="additionalInfo">Additional Info:</label>
              <textarea
                name="additionalInfo"
                id="additionalInfo"
                placeholder="Additional Info"
                onChange={handleChange}
                value={formData.additionalInfo}
              ></textarea>
            </div>
          </div>

          <div className="button-container">
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooking;
