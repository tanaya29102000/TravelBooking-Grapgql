// import React, { useState } from 'react';
// import axios from 'axios';
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
//         alert('Booking added successfully!');

//       } else {
//         // REST API endpoint for adding booking
//         const response = await axios.post('http://localhost:5000/api/bookings', formData);

//         if (response.status !== 201) {
//           throw new Error('Failed to add booking');
//         }

//         alert('Booking added successfully via REST API!');
//       }

//       // Reset form data after successful submission
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
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="booking-container">
//       {/* Left Side - Image */}
//       <div className="image-container">
//         <img src="Travel.png" alt="Travel" />
//       </div>

//       {/* Right Side - Form */}
//       <div className="form-container">
//         <h2>Travel Information Form</h2>
//         {error && <p className="error">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <select name="title" onChange={handleChange} value={formData.title} required>
//             <option value="">Please Select</option>
//             <option value="Mr">Mr</option>
//             <option value="Ms">Ms</option>
//             <option value="Mrs">Mrs</option>
//           </select>
//           <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} required />
//           <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} required />
//           <input type="date" name="birthDate" onChange={handleChange} value={formData.birthDate} required />
//           <input type="text" name="organizationName" placeholder="Organization Name" onChange={handleChange} value={formData.organizationName} />
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
//           <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} value={formData.phoneNumber} required />
//           <select name="departureCountry" onChange={handleChange} value={formData.departureCountry} required>
//             <option value="">Please Select</option>
//             <option value="USA">USA</option>
//             <option value="India">India</option>
//             {/* Add more countries as needed */}
//           </select>
//           <select name="destinationCountry" onChange={handleChange} value={formData.destinationCountry} required>
//             <option value="">Please Select</option>
//             <option value="USA">USA</option>
//             <option value="India">India</option>
//             {/* Add more countries as needed */}
//           </select>
//           <input type="date" name="departureDate" onChange={handleChange} value={formData.departureDate} required />
//           <input type="date" name="returnDate" onChange={handleChange} value={formData.returnDate} />
//           <select name="classOfService" onChange={handleChange} value={formData.classOfService} required>
//             <option value="">Select Class of Service</option>
//             <option value="Economy">Economy</option>
//             <option value="Business">Business</option>
//             <option value="First Class">First Class</option>
//           </select>
//           <input type="text" name="preferredHotel" placeholder="Preferred Hotel" onChange={handleChange} value={formData.preferredHotel} />
//           <input type="text" name="preferredAirline" placeholder="Preferred Airline" onChange={handleChange} value={formData.preferredAirline} />
//           <textarea name="additionalInfo" placeholder="Additional Information" onChange={handleChange} value={formData.additionalInfo}></textarea>
//           <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Booking'}</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddBooking;
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2
import './AddBooking.css'; // Ensure to import the CSS file

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

    // Choose to use GraphQL or REST API
    const useGraphQL = true; // Change to false to use REST API

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

        console.log(response.data);
        // Use SweetAlert for success message
        await Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Booking added successfully!',
        });

      } else {
        // REST API endpoint for adding booking
        const response = await axios.post('http://localhost:5000/api/bookings', formData);

        if (response.status !== 201) {
          throw new Error('Failed to add booking');
        }

        // Use SweetAlert for success message
        await Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Booking added successfully via REST API!',
        });
      }

      // Reset form data after successful submission
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
      // Use SweetAlert for error message
      await Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Error adding booking! Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-container">
      {/* Left Side - Image */}
      <div className="image-container">
        <img src="Travel.png" alt="Travel" />
      </div>

      {/* Right Side - Form */}
      <div className="form-container">
        <h2>Travel Information Form</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <select name="title" onChange={handleChange} value={formData.title} required>
            <option value="">Please Select</option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
          </select>
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} required />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} required />
          <input type="date" name="birthDate" onChange={handleChange} value={formData.birthDate} required />
          <input type="text" name="organizationName" placeholder="Organization Name" onChange={handleChange} value={formData.organizationName} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
          <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} value={formData.phoneNumber} required />
          <select name="departureCountry" onChange={handleChange} value={formData.departureCountry} required>
            <option value="">Please Select</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            {/* Add more countries as needed */}
          </select>
          <select name="destinationCountry" onChange={handleChange} value={formData.destinationCountry} required>
            <option value="">Please Select</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            {/* Add more countries as needed */}
          </select>
          <input type="date" name="departureDate" onChange={handleChange} value={formData.departureDate} required />
          <input type="date" name="returnDate" onChange={handleChange} value={formData.returnDate} />
          <select name="classOfService" onChange={handleChange} value={formData.classOfService} required>
            <option value="">Select Class of Service</option>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First Class">First Class</option>
          </select>
          <input type="text" name="preferredHotel" placeholder="Preferred Hotel" onChange={handleChange} value={formData.preferredHotel} />
          <input type="text" name="preferredAirline" placeholder="Preferred Airline" onChange={handleChange} value={formData.preferredAirline} />
          <textarea name="additionalInfo" placeholder="Additional Information" onChange={handleChange} value={formData.additionalInfo}></textarea>
          <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Booking'}</button>
        </form>
      </div>
    </div>
  );
};

export default AddBooking;
