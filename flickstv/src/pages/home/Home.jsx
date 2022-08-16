import React, { useEffect } from 'react';
import Banner from '../../components/banner/Banner';
import Navbar from '../../components/navbar/Navbar';
import Lists from '../../components/lists/Lists';
import Footer from '../../components/footer/Footer';
import './home.scss';
import axios from 'axios';
import { useState } from 'react';


const Home = ({ type }) => {

  const [lists, setContentLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {

    const getScatteredLists = async () => {

      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token:
                "Bearer "+JSON.parse(localStorage.getItem("user")).split(" ")[1] ,
                
            },
          });
        setContentLists(res.data);
        // console.log("list is", res.data);
      } catch (error) {
        console.log(error);
      }

    }
    getScatteredLists();
  }, [type, genre])

  return (
    <div className="home">
      <Navbar />
      <Banner type={type} setGenre={setGenre}/>

      {lists.map((list) =>
        (<Lists list={list} />))}

      <Footer />
    </div>

  )
}

export default Home