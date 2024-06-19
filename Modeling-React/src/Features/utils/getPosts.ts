import axios from "axios";
import shuffle from "./shuffleArr";
import { TypePostInfo } from "../types/postsTypes";

export const getAllPosts = async (req: string) => {
  const url = "https://dummyapi.io/data/v1/";

  try {
    console.log("🚀 ~ getAllPosts ~ req:", req)
    const res = await axios.get(`${url}${req}`, {
      headers: {
        "Content-Type": "application/json",
        "App-Id": "65b36dd843fd2c4ea4f852da",
      },
    });
    if (!res) throw new Error("error in fetch data posts");
    const { data } = res.data;
    const newArr = shuffle(data as []);
    return newArr;
  } catch (error) {
    console.error(error);
  }
};

export const getPost = async () => {
  const url = "https://dummyapi.io/data/v1/post?limit=1";

  try {
    const res = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "App-Id": "65b36dd843fd2c4ea4f852da",
      },
    });
    if (!res) throw new Error("error in fetch data posts");
    const { data } = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};


