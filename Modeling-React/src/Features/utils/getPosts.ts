import axios from "axios";

export const url = {
  postByUser: "https://dummyapi.io/data/v1/user/",
  allPost: "https://dummyapi.io/data/v1/post",
};

const getAllPosts = async (req: string) => {
  const url = "https://dummyapi.io/data/v1/";

  try {
    const res = await axios.get(`${url}${req}`, {
      headers: {
        "Content-Type": "application/json",
        "app-id": "65b36dd843fd2c4ea4f852da",
      },
    });
    if (!res) throw new Error("error in fetch data posts");
    const { data } = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getAllPosts;
