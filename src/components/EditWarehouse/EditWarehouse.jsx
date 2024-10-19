import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./EditWarehouse.scss";

function EditWarehouse() {
  const { id } = useParams(); // Get the warehouse ID
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

  useEffect(() => {
    // Fetch warehouse data by ID
    const fetchWarehouse = async () => {
      try {
        const response = await axios.get(`/api/warehouses/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching warehouse data", error);
      }
    };

    fetchWarehouse();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrors({});

    // Validate form data before submission
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      try {
        // Axios PUT request
        const response = await axios.put(`/api/warehouses/${id}`, formData);
        if (response.status === 200) {
          setSuccessMessage("Warehouse updated successfully!");
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setErrors({
            submit: "Invalid input. Please check your data and try again.",
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

  const validateForm = (data) => {
    const newErrors = {};
    const phoneRegex = /^\+?[0-9\s-]{10,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.warehouse_name)
      newErrors.warehouse_name = "Warehouse Name is required";
    if (!data.address) newErrors.address = "Address is required";
    if (!data.city) newErrors.city = "City is required";
    if (!data.country) newErrors.country = "Country is required";
    if (!data.contact_name) newErrors.contact_name = "Contact Name is required";
    if (!data.contact_position)
      newErrors.contact_position = "Position is required";
    if (!phoneRegex.test(data.contact_phone))
      newErrors.contact_phone = "Invalid phone number";
    if (!emailRegex.test(data.contact_email))
      newErrors.contact_email = "Invalid email address";

    return newErrors;
  };

  return (
    <form className="warehouse-form" onSubmit={handleSubmit}>
      <div className="warehouse-form__add">
        <img
          src="/src/assets/icons/arrow_back-24px.svg"
          alt="goback arrow"
          className="warehouse-form__icon"
        />
        <h2 className="warehouse-form__title">Edit Warehouse</h2>
      </div>

      <div className="warehouse-form__section">
        <div className="warehouse-form__details">
          <h3 className="warehouse-form__subtitle">Warehouse Details</h3>

          <label className="warehouse-form__label">
            <div className="warehouse-form__label-text">Warehouse Name</div>
            <input
              className="warehouse-form__input"
              type="text"
              value={formData.warehouse_name}
              onChange={(e) =>
                setFormData({ ...formData, warehouse_name: e.target.value })
              }
            />
            {errors.warehouse_name && (
              <p className="warehouse-form__error">{errors.warehouse_name}</p>
            )}
          </label>

          <label className="warehouse-form__label">
            <div className="warehouse-form__label-text">Street Address</div>
            <input
              className="warehouse-form__input"
              type="text"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
            {errors.address && (
              <p className="warehouse-form__error">{errors.address}</p>
            )}
          </label>

          <label className="warehouse-form__label">
            <div className="warehouse-form__label-text">City</div>
            <input
              className="warehouse-form__input"
              type="text"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
            {errors.city && (
              <p className="warehouse-form__error">{errors.city}</p>
            )}
          </label>

          <label className="warehouse-form__label">
            <div className="warehouse-form__label-text">Country</div>
            <input
              className="warehouse-form__input"
              type="text"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
            />
            {errors.country && (
              <p className="warehouse-form__error">{errors.country}</p>
            )}
          </label>
        </div>

        <div className="warehouse-form__contact-details">
          <h3 className="warehouse-form__subtitle">Contact Details</h3>

          <label className="warehouse-form__label">
            <div className="warehouse-form__label-text">Contact Name</div>
            <input
              className="warehouse-form__input"
              type="text"
              value={formData.contact_name}
              onChange={(e) =>
                setFormData({ ...formData, contact_name: e.target.value })
              }
            />
            {errors.contact_name && (
              <p className="warehouse-form__error">{errors.contact_name}</p>
            )}
          </label>

          <label className="warehouse-form__label">
            <div className="warehouse-form__label-text">Position</div>
            <input
              className="warehouse-form__input"
              type="text"
              value={formData.contact_position}
              onChange={(e) =>
                setFormData({ ...formData, contact_position: e.target.value })
              }
            />
            {errors.contact_position && (
              <p className="warehouse-form__error">{errors.contact_position}</p>
            )}
          </label>

          <label className="warehouse-form__label">
            <div className="warehouse-form__label-text">Phone Number</div>
            <input
              className="warehouse-form__input"
              type="text"
              value={formData.contact_phone}
              onChange={(e) =>
                setFormData({ ...formData, contact_phone: e.target.value })
              }
            />
            {errors.contact_phone && (
              <p className="warehouse-form__error">{errors.contact_phone}</p>
            )}
          </label>

          <label className="warehouse-form__label">
            <div className="warehouse-form__label-text">Email</div>
            <input
              className="warehouse-form__input"
              type="email"
              value={formData.contact_email}
              onChange={(e) =>
                setFormData({ ...formData, contact_email: e.target.value })
              }
            />
            {errors.contact_email && (
              <p className="warehouse-form__error">{errors.contact_email}</p>
            )}
          </label>
        </div>
      </div>

      <div className="warehouse-form__actions">
        {errors.submit && (
          <p className="warehouse-form__error">{errors.submit}</p>
        )}
        {successMessage && (
          <p className="warehouse-form__success">{successMessage}</p>
        )}
        <button
          type="button"
          className="warehouse-form__button warehouse-form__button--cancel"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="warehouse-form__button warehouse-form__button--submit"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default EditWarehouse;
