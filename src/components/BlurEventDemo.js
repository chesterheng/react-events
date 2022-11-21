import React from "react";

const FocusEventDemo = () => {
  const handleBlur = (event) => console.log("trigger onBlur event");
  return (
    <div>
      <h1>onBlur Event Demo</h1>
      <input onBlur={handleBlur} />
    </div>
  );
};

export default FocusEventDemo;
