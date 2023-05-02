import React from "react";
import Links from "./Links";


function About(props) {
  return (
    <div id="about">
      <h2 style={{color: props.color}}>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}

export default About;