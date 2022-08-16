import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
  updateListStart,
  updateListSuccess,
  updateListFailure


} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/lists", list, {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("/lists/" + id, {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};

//update

export const updateList = async (inp, id, dispatch) => {
  console.log("update list called")
  console.log("data is in list update", inp )
  dispatch(updateListStart());
  try {
    const res = await axios.put("/lists/" + id, inp, {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(updateListSuccess(res.data));
  } catch (err) {
    dispatch(updateListFailure());
  }
};
