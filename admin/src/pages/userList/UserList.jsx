import "./userList.css";

import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {

  
        return (
         <div className="userlist_wraper">
           <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        
          <li className="widgetSmListItem">
            <img
              src=             
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
             
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Praveen</span>
            </div>
            <button className="widgetSmButton">
             
              View
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src=             
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
             
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Sijo</span>
            </div>
            <button className="widgetSmButton">
             
              View
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src=             
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
             
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Akhil</span>
            </div>
            <button className="widgetSmButton">
             
              View
            </button>
          </li>
       
      </ul>
    </div>
         </div>
        );


}
