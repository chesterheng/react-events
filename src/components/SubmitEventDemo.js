import React, { useState } from "react";

const SubmitEventDemo = () => {
  const [value, setValue] = useState({
    name: "",
    address: "",
  });
  const handleChange = (event) =>
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Form Event: onSubmit demo</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        placeholder="name"
      />
      <br />
      <label htmlFor="address">Address:</label>
      <textarea
        id="address"
        name="address"
        onChange={handleChange}
        placeholder="address"
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SubmitEventDemo;
