import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/autumn">Autumn</Link>
      </li>
      <li>
        <Link to="/winter">Winter</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
