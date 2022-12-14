import * as Postapi from "../api/Postapi.js";
import * as GetPostApi from "../api/Getpostapi.js";
// import * as Getpostapi from "../api/Getpostapi.js";

export const Postdata = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    await Postapi.PostRoute(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};

export const GetDataAction = () => async (dispatch) => {
  dispatch({ type: "RETRIEVING_START" });
  try {
    const { data } = await GetPostApi.GetPostRoute();
    console.log(data);
    dispatch({ type: "RETRIEVING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "RETRIEVING_FAIL" });
    console.log(error);
  }
};
