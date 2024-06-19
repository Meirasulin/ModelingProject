import { useState, useEffect } from "react";
import { getAllPosts, getPost } from "../utils/getPosts";
import { TypePostInfo } from "../types/postsTypes";
import { useDispatch } from "react-redux";
import { insertPostsList, addNewPost} from "../../redux/simpleSlice";

const newPostData: TypePostInfo = {
  text: "good morning guys",
  image: "https://i.ibb.co/LgrK8hT/man-1851469-960-720.jpg",
  likes: 50,
  tags: ["profile", "mock", "morning"],
  owner: '60d0fe4f5311236168a10a1d',
};

const PostsHook = (initialUrl: string) => {
  const dispatch = useDispatch();
  // const [data, setData] = useState<TypePostInfo[] | undefined>(undefined);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchData() {
  //     setIsLoading(true);
  //     try {
  //       const response = await getAllPosts(initialUrl);
  //       if (!response) throw new Error("error in fetch posts data");
  //       // if (data) setData([...data, ...response]);dispatch(insertPostsList(response))
  //       dispatch(insertPostsList(response))
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         setError(error.message);
  //       }
  //     }
  //     setIsLoading(false);
  //   }
  //   fetchData();
  // }, [initialUrl]);

  const getPosts = async () => {
    setIsLoading(true);
    try {
      const response = await getAllPosts(initialUrl);
      if (!response) throw new Error("error in fetch posts data");
      dispatch(insertPostsList(response));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const addPost = async() => {
    try {
      const response = await getPost();
      if (!response) throw new Error("error in fetch posts data");
      dispatch(addNewPost(response[0]));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { error, isLoading, getPosts, addPost };
};
export default PostsHook;
