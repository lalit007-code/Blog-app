import axios from "axios";
import { useRecoilValue } from "recoil";
import { token } from "../store/atom";

const BASE_URL = "https://backend.lalit284546.workers.dev/api/v1";

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getBlogs = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const userToken = useRecoilValue(token);
  //   console.log(userToken);
  //   console.log(localStorage.getItem("token"));

  const response = await axiosInstance.get("/blog/bulk", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  //   console.log(response);

  const data = response.data;
  console.log(data);

  return data;
};
