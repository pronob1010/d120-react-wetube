import React, { useState } from "react";
import axios from "axios";
import Result from "./result";

function Input() {
  const [SerchText, setSerchText] = useState("Top");
  const [Video, setVideo] = useState("");

  const handleChange = (event) => {
    // console.log(event.target.value);
    setSerchText(event.target.value);
  };

  const handleSubmit = (event) => {
    //console.log(event);

    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?type=video&q=${SerchText}&part=snippet&maxResults=5&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log(response);

        const { items } = response.data;
        setVideo(items);
      })
      .catch((err) => console.log(err));

    event.preventDefault();
  };
  //console.log(Video);
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
 
      <Result videos={Video} />
    </div>
  );
}

export default Input;
