import { useState, useRef, useEffect } from "react";
import PostsHook from "../Hooks/PostsHook";
import Post from "./Post";
import Loading from "./Loading";
import Error from "./Error";
import React from "react";
import { useAppSelector } from "../../redux/hooks";

const PostContainer = () => {
  const postList = useAppSelector((state) => state.posts.posts);
  const randomNumber = Math.floor(Math.random() * (43 - 0 + 1)) + 0;
  const [link, setLink] = useState(`post?page=${randomNumber}`);
  const { getPosts, isLoading, error, addPost } = PostsHook(link);

  useEffect(() => {
    getPosts();
  }, []);

  const loader = useRef(null);

  return (
    <div className="max-w-2xl mx-auto">

      <div className="grid grid-cols-2 gap-3 p-4">
        {postList &&
          postList.map((post) => (
            <Post key={post.id} post={post} setLink={(link) => setLink(link)} />
          ))}

        <div ref={loader}></div>
      </div>
      <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => addPost()}>
        Add Post
      </button>
      {isLoading && <Loading />}

      {error && <Error message={error} />}
    </div>
  );
};

export default PostContainer;
