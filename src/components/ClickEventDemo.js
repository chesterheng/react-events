import React from "react";

const ClickEventDemo = () => {
  const handleClick = () => console.log("Trigger click event");
  return (
    <div>
      <h1>onClick Event Demo</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ClickEventDemo;
