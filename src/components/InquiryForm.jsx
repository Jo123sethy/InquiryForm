import React, { useState } from "react";
import "./Form.css";
import { toast } from "react-toastify";

const InquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors before submitting ",{
        closeButton: false
      });
    } else {
      setErrors({});
      toast.success("Form submitted successfully ",{
        closeButton: false
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
<h2 style={{ textAlign: "center" }}>Contact Us</h2>
        {/* NAME */}
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        {/* EMAIL */}
        <label>Email Address</label>
        <input
          type="email"
          placeholder="example@mynesthub.in"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* MESSAGE */}
        <label>Message</label>
        <textarea
          placeholder="How can we assist you today?"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
};

export default InquiryForm;