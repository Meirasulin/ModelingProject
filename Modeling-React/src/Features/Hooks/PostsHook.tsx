import { useState, useEffect } from "react";
import getAllPosts from "../utils/getPosts";
import { TypePostInfo } from "../types/postsTypes";
import shuffle from "../utils/shuffleArr";

const PostsHook = (initialUrl: string) => {
  const [data, setData] = useState<TypePostInfo[] | undefined>(undefined);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await getAllPosts(initialUrl);
        if (!response) throw new Error("error in fetch posts data");
        if (data) setData([...data, ...response]);
        setData(response);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setIsLoading(false);
    }
    fetchData();
  }, [initialUrl]);

  return { data, error, isLoading };
};
export default PostsHook;
