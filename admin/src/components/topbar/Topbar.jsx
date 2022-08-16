import React from "react";
import "./topbar.scss";
import { Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <img
            className="logo"
            src="assets/logo.png"
            alt=""
          />
        </div>
        <div className="topRight">
        
          <div className="profile-options topbarIconContainer">
            <Settings className="icons" />
            <div className="optioncls">
              <span>Profile</span>
              <span>Logout</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
