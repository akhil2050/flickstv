import React from 'react'
import { PlayArrowOutlined, ThumbUpOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

import './listitems.scss';

export default function Listitems({ index, item }) {
  // console.log("liitem", index, item)
  const [isHovered, setIsHovered] = useState(false);
  const [liItem, setItem] = useState({});
  //const trailer = "assets/dummy.mp4";

  useEffect(() => {
    const findMovie = async () => {
      try {
        const res = await axios.get("/movies/search/" + item, {
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).split(" ")[1] ,
              
          },
        });
        setItem(res.data);
        // console.log("mvdata", res.data);
      } catch (err) {
        console.log(err);
      }
    };
    findMovie();
  }, [item]);
  return (
    <Link to={{ pathname: "/watch", liItem: liItem }}>
      <div>
        <div className='listitems'

          onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
          //style={{ left: 255-50}}
          style={{ left: isHovered && index * (265) + (index * 9.5) }}
        >
          {/* <img src="assets/movie3.jpg" alt="" /> */}
          <img src={liItem.img} alt="" />
          {isHovered && (
            <>
              <video src={liItem.movieTrailer} autoPlay={true} loop muted />
              <div className='content_info'>
                <div className='icons'>
                  <PlayArrowOutlined className='icon' />
                  <ThumbUpOutlined className='icon' />
                </div>
                <div className='more_info'>
                  <span>{liItem.duration}</span>
                  <span className='age_limit'>{liItem.ageLimit}</span>
                </div>
                <div className='description'>
                  {liItem.movieDesc}
                </div>
                <div className='genre'>{liItem.genre}</div>

              </div>
            </>
          )}
        </div>


      </div>
    </Link>
  )
}
