import React from "react";
import Mainapp from "./main";

function Result(props) {
  console.log(props.videos);
  return (
    <div>
      <h3>Here is your result : </h3>
      <hr></hr>
      {props.videos.map((video) => {
        return (
          <Mainapp
            title={video.snippet.title}
            dateAdded={video.snippet.title}
            channel="Daynotes"
          />
        );
      })}
    </div>
  );
}

export default Result;
