import React, { useState } from "react";

const ChangeEventDemo = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);
  return (
    <div>
      <h1>Form Event: onChange demo</h1>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default ChangeEventDemo;
