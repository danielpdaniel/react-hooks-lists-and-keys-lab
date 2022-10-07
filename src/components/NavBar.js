import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksList = links.map(link => {
    const linkDestination = `#${link}`
    return <a href={linkDestination} key={link} >{link}</a>
  })

  return <nav>{linksList}</nav>;
}

export default NavBar;
