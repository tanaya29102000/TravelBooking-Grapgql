import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; 
import "./AddBooking.css";

const AddBooking = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    organizationName: "",
    email: "",
    phoneNumber: "",
    departureCountry: "",
    destinationCountry: "",
    departureDate: "",
    returnDate: "",
    classOfService: "",
    preferredHotel: "",
    preferredAirline: "",
    additionalInfo: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

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

        const response = await axios.post(
          "https://travel-booking-grapgql-ikuv.vercel.app/graphql",
          { query: mutation }
        );
        if (response.data.errors) {
          throw new Error(response.data.errors[0].message);
        }

        await Swal.fire({
          icon: "success",
          title: "Booking Added",
          text: "Your booking was added successfully!",
        });
      } else {
        const response = await axios.post(
          "https://travel-booking-grapgql-ikuv.vercel.app/api/bookings",
          formData
        );
        if (response.status !== 201) {
          throw new Error("Failed to add booking.");
        }

        await Swal.fire({
          icon: "success",
          title: "Booking Added",
          text: "Booking added successfully via REST API!",
        });
      }

      setFormData({
        title: "",
        firstName: "",
        lastName: "",
        birthDate: "",
        organizationName: "",
        email: "",
        phoneNumber: "",
        departureCountry: "",
        destinationCountry: "",
        departureDate: "",
        returnDate: "",
        classOfService: "",
        preferredHotel: "",
        preferredAirline: "",
        additionalInfo: "",
      });
    } catch (err) {
      console.error(err);
      setError("Error adding booking! Please try again.");
      await Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to add the booking. Please try again.",
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
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="title">Title:</label>
              <select
                name="title"
                id="title"
                onChange={handleChange}
                value={formData.title}
                required
              >
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
              <select
                name="classOfService"
                id="classOfService"
                onChange={handleChange}
                value={formData.classOfService}
                required
              >
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
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooking;
