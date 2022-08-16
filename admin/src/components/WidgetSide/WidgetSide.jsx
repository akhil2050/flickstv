import "./WidgetSide.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSide() {

  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjQ2NzRiNzVjZmZjMWQ4NTNkODQ3OCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjAxODQ0MDgsImV4cCI6MTY2MDc4OTIwOH0.JfKq9k1DybwZjtb9KpbG6ZDVnnkFwJKiIvYI3d3C5Lg",
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);

      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="WidgetSide">
      <span className="WidgetSideTitle">New Join Members</span>
      <ul className="WidgetSideList">

        {newUsers.map((user) => (
          <li className="WidgetSideListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="WidgetSideImg"
            />
            <div className="WidgetSideUser">
              <span className="WidgetSideUsername">{user.username}</span>
            </div>
            <button className="WidgetSideButton">
              <Visibility className="WidgetSideIcon" />
              Display
            </button>
          </li>
        ))}
        {/* <li className="WidgetSideListItem">
          <img
            src=
            "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"

            alt=""
            className="WidgetSideImg"
          />
          <div className="WidgetSideUser">
            <span className="WidgetSideUsername">Sijo</span>
          </div>
          <button className="WidgetSideButton">

            View
          </button>
        </li>
        <li className="WidgetSideListItem">
          <img
            src=
            "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"

            alt=""
            className="WidgetSideImg"
          />
          <div className="WidgetSideUser">
            <span className="WidgetSideUsername">Akhil</span>
          </div>
          <button className="WidgetSideButton">

            View
          </button>
        </li> */}

      </ul>
    </div>
  );
}
