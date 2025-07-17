import React from "react";
import './GotoButton.css'
import { NavLink } from "react-router-dom";
function GotoButtons() {
  return (
    <div className="gotomodel-container">
      <p className="gotomodel-button">
        <NavLink to="/model/taycan-4-black-edition" className="gotoButton">
            <span className="label">Discover the new Taycan Black Edition</span>
        </NavLink>
      </p>
    </div>
  );
}

export default GotoButtons;
                                                                                                                     