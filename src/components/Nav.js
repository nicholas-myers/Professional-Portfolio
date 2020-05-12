import React from "react";
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/">Resume</Link>
      <Link to="/">Projects</Link>
      <Link to="/">Blog</Link>
    </nav>
  );
}
