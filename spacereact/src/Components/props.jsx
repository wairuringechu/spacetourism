import "./props.css";
import React from "react";

function Main(props) {
  const { destination } = props;
  return (
    <div className="Container">
      <div className="begin">
        <p className="toptext">SO, YOU WANT TO TRAVEL TO </p>
        <p className="text2">{destination}</p>
        <p className="text3">
          Let's face it; if you want to go to {destination}, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience! <span>Explore</span>
        </p>
      </div>
    </div>
  );
}

export default Main;