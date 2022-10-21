import { updateStart, updateError, updateSuccess } from "./userSlice";
import axios from "axios";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    // const res = await axios.post("http://localhost:8000/vi/update", user);
    axios
      .post("http://localhost:3000/vi/update", user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateError());
  }
};
