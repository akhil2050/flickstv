import React from 'react'
import axios from "axios";
import './banner.scss';
import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import { useState } from 'react';
import { useEffect } from 'react';

export default function Banner({ type, setGenre}) {

    const [itmContent, setRandomContent] = useState({});

    useEffect(() => {
        const contentRandom = async () => {
            try {
                const res = await axios.get(`movies/scattered?type=${type}`, {
                    headers: {
                        token:
                          "Bearer "+JSON.parse(localStorage.getItem("user")).split(" ")[1] ,
                          
                      },
                });
                

                setRandomContent(res.data[0]);
                // console.log("data is", res.data);
            }
            catch (err) {
                console.log(err);

            }
        };
        contentRandom();
    }, [type]);
    return (
        <div className='Banner'>
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select
                        name="genre"
                        id="genre"
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        <option>Genre</option>
                        <option value="comedy">Comedy</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                    </select>
                </div>
            )}
            <img src={itmContent.img} alt="banner image" />

            <div className='bannerinfo'>
                <img src={itmContent.imgTitle} alt="feature image" />
                <span className="shortdesc">{itmContent.movieDesc}</span>
                <div className="infobuttons">
                    <button className="playbtn">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="morebtn">
                        <InfoOutlined />
                        <span>More</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
