import axios from "axios";
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  updateMovieFailure,
  updateMovieStart,
  updateMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovActions";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movies", {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("/movies", movie, {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("/movies/" + id, {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};


//update
export const updateMovie = async (inp, dispatch) => {
  console.log("update movie called")
  console.log("data is in update", inp )
  dispatch(updateMovieStart());
  try {
    const res = await axios.put("/movies/" + inp.movID, inp, {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(updateMovieSuccess(res.data));
  } catch (err) {
    dispatch(updateMovieFailure());
  }
};