import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./UserActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    // console.log("user", user);
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err)
    dispatch(loginFailure());
  }
};