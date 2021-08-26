import React, { useState } from "react";

function Input() {
  const [SerchText, setSerchText] = useState("");

  const handleChange = (event) => {
    // console.log(event.target.value);
    setSerchText(event.target.value);
  };

  return (
    <form>
      <label>
        Search:
        <input
        type="text"
        name="search"
        onChange={handleChange}
        value={SerchText}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Input;
