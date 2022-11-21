import React from "react";

const FocusEventDemo = () => {
  const handleFocus = (event) => console.log("trigger onFocus event");
  return (
    <div>
      <h1>onFocus Event Demo</h1>
      <input onFocus={handleFocus} />
    </div>
  );
};

export default FocusEventDemo;
