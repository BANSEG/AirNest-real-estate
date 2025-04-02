// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Contact



import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("'https://tight-flor-digitalfortress-c88eb7f5.koyeb.app/api/contact/' ", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      setResponseMessage("Message sent successfully!");
      console.log("Response:", data);

      // Clear form fields after submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage("Error sending message. Try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border p-2 mb-4 w-full h-32"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Send Message
        </button>
      </form>

      {responseMessage && (
        <p className="mt-4 text-lg">{responseMessage}</p>
      )}
    </div>
  );
};

export default Contact;


  