import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from '../../utils/utils'
import "./AddWarehouse.scss";

function AddWarehouse() {
  const [formData, setFormData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrors({});

    // Validate data for form
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      try {
        // POST request
        const response = await axios.post(`${url}/api/warehouses`, formData);

        if (response.status === 201) {
          setSuccessMessage("Warehouse added successfully!");
          // Reset the form after submission
          setFormData({
            warehouse_name: "",
            address: "",
            city: "",
            country: "",
            contact_name: "",
            contact_position: "",
            contact_phone: "",
            contact_email: "",
          });

          return( navigate('/'))
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setErrors({
            submit: "Invalid input.",
          });
        } else {
          setErrors({
            submit: "Something went wrong. Please try again later.",
          });
        }
      }
    } else {
      setErrors(newErrors);
    }
  };

  // Validation function
  const validateForm = (data) => {
    const newErrors = {};
    const phoneRegex = /\+1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.warehouse_name)
      newErrors.warehouse_name = "Warehouse Name is required";
    if (!data.address) newErrors.address = "Address is required";
    if (!data.city) newErrors.city = "City is required";
    if (!data.country) newErrors.country = "Country is required";
    if (!data.contact_name) newErrors.contact_name = "Contact Name is required";
    if (!data.contact_position)
      newErrors.contact_position = "Contact Position is required";
    if (!phoneRegex.test(data.contact_phone))
      newErrors.contact_phone = "Invalid phone number";
    if (!emailRegex.test(data.contact_email))
      newErrors.contact_email = "Invalid email format";

    return newErrors;
  };

  const returnToHome = () => { return(navigate('/')) }

  return (
    <form className="warehouse-form1" onSubmit={handleSubmit}>
      <div className="warehouse-form1__add">
        <img
          src="/src/assets/icons/arrow_back-24px.svg"
          alt="goback arrow"
          className="warehouse-form1__icon"
          onClick={returnToHome}
        />
        <h2 className="warehouse-form1__title">Add New Warehouse</h2>
      </div>

      <div className="warehouse-form1__section">
        <div className="warehouse-form1__details">
          <h3 className="warehouse-form1__subtitle">Warehouse Details</h3>

          <label className="warehouse-form1__label">
            <div className="warehouse-form1__label-text">Warehouse Name</div>
            <input
              className="warehouse-form1__input"
              placeholder="Warehouse Name"
              type="text"
              value={formData.warehouse_name}
              onChange={(e) =>
                setFormData({ ...formData, warehouse_name: e.target.value })
              }
            />
            {errors.warehouse_name && (
              <p className="warehouse-form1__error">{errors.warehouse_name}</p>
            )}
          </label>

          <label className="warehouse-form1__label">
            <div className="warehouse-form1__label-text">Street Address</div>
            <input
              className="warehouse-form1__input"
              placeholder="Street Address"
              type="text"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
            {errors.address && (
              <p className="warehouse-form1__error">{errors.address}</p>
            )}
          </label>

          <label className="warehouse-form1__label">
            <div className="warehouse-form1__label-text">City</div>
            <input
              className="warehouse-form1__input"
              placeholder="City"
              type="text"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
            {errors.city && (
              <p className="warehouse-form1__error">{errors.city}</p>
            )}
          </label>

          <label className="warehouse-form1__label">
            <div className="warehouse-form1__label-text">Country</div>
            <input
              className="warehouse-form1__input"
              placeholder="Country"
              type="text"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
            />
            {errors.country && (
              <p className="warehouse-form1__error">{errors.country}</p>
            )}
          </label>
        </div>

        <div className="warehouse-form1__contact-details">
          <h3 className="warehouse-form1__subtitle">Contact Details</h3>

          <label className="warehouse-form1__label">
            <div className="warehouse-form1__label-text">Contact Name</div>
            <input
              className="warehouse-form1__input"
              placeholder="Contact Name"
              type="text"
              value={formData.contact_name}
              onChange={(e) =>
                setFormData({ ...formData, contact_name: e.target.value })
              }
            />
            {errors.contact_name && (
              <p className="warehouse-form1__error">{errors.contact_name}</p>
            )}
          </label>

          <label className="warehouse-form1__label">
            <div className="warehouse-form1__label-text">Position</div>
            <input
              className="warehouse-form1__input"
              placeholder="Position"
              type="text"
              value={formData.contact_position}
              onChange={(e) =>
                setFormData({ ...formData, contact_position: e.target.value })
              }
            />
            {errors.contact_position && (
              <p className="warehouse-form1__error">
                {errors.contact_position}
              </p>
            )}
          </label>

          <label className="warehouse-form1__label">
            <div className="warehouse-form1__label-text">Phone Number</div>
            <input
              className="warehouse-form1__input"
              placeholder="Phone Number"
              type="text"
              value={formData.contact_phone}
              onChange={(e) =>
                setFormData({ ...formData, contact_phone: e.target.value })
              }
            />
            {errors.contact_phone && (
              <p className="warehouse-form1__error">{errors.contact_phone}</p>
            )}
          </label>

          <label className="warehouse-form1__label">
            <div className="warehouse-form1__label-text">Email</div>
            <input
              className="warehouse-form1__input"
              placeholder="Email"
              type="text"
              value={formData.contact_email}
              onChange={(e) =>
                setFormData({ ...formData, contact_email: e.target.value })
              }
            />
            {errors.contact_email && (
              <p className="warehouse-form1__error">{errors.contact_email}</p>
            )}
          </label>
        </div>
      </div>

      <div className="warehouse-form1__actions">
        {errors.submit && (
          <p className="warehouse-form1__error">{errors.submit}</p>
        )}
        {successMessage && (
          <p className="warehouse-form1__success">{successMessage}</p>
        )}
        <button
          type="button"
          className="warehouse-form1__button warehouse-form1__button--cancel"
          onClick={returnToHome}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="warehouse-form1__button warehouse-form1__button--submit"
        >
          + Add Warehouse
        </button>
      </div>
    </form>
  );
}

export default AddWarehouse;
