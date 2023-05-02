import React from "react";

function NavBar() {
  let links = ["home", "about", "projects"];

  const singlelinkElement = links.map((link)=> {
    return <a key={link} href={"#"+link}>{link}</a>
  })

  return <nav>{singlelinkElement}</nav>;
}

export default NavBar;