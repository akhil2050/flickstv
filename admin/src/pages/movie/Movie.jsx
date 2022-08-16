import { Link, useLocation, Redirect } from "react-router-dom";
import "./movie.css";
import { Publish } from "@material-ui/icons";
import { useContext, useEffect } from "react";
import { MovContext } from "../../context/movContext/MovContext";
import { updateMovie } from "../../context/movContext/apiCalls";
import { useState } from "react";

export default function Movie() {
  const location = useLocation();
  const movie = location.movie;
  const { dispatch } = useContext(MovContext);
  console.log("movie class", movie);
  console.log("movie img", movie.img);

  const [movieTitle, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [movID] = useState(movie._id);
  const[btnvar ,setbtnvar]=useState(true);
  console.log("btnvar",btnvar);

  const handleUpdate = (e) => {
    setbtnvar(false);
    console.log("update called");
    e.preventDefault();
    updateMovie({ movieTitle, genre, movID }, dispatch);
  };

  const redirect = (e) => {
    console.log("redirect called");
    e.preventDefault();
    window.location.href = '/movies'
  }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={`/${movie.img}`} alt="" className="productInfoImg" />
            <span className="productName">{movie.movieTitle}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            {/* <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div> */}
            {/* <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" placeholder={movie.movieTitle}
              onChange={(e) => setTitle(e.target.value)} />
            {/* <label>Year</label>
            <input type="text" placeholder={movie.year} /> */}
            <label>Genre</label>
            <input type="text" placeholder={movie.genre}
              onChange={(e) => setGenre(e.target.value)} />
            {/* <label>Limit</label>
            <input type="text" placeholder={movie.limit} /> */}
            <label>Trailer</label>
            <input type="file" placeholder={`/${movie.movieTrailer}`} />
            {/* <label>Video</label>
            <input type="file" placeholder={movie.video} /> */}
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={`/${movie.img}`}
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            {btnvar ? (<button className="productButton" onClick={handleUpdate} >Update
            </button>
            ) : (<button className="productButton" onClick={redirect}>Confirm

            </button>
            )}



          </div>
        </form>
      </div>
    </div>
  );
}
