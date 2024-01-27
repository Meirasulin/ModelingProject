import { useState, useRef } from "react";
import PostsHook from "../Hooks/PostsHook";
import Post from "./Post";
import Loading from "./Loading";
import Error from "./Error";
import React from "react";

const PostContainer = () => {
  const randomNumber = Math.floor(Math.random() * (43 - 0 + 1)) + 0;
  const [link, setLink] = useState(`post?page=${randomNumber}`);
  const { data, isLoading, error } = PostsHook(link);

  const loader = useRef(null);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="grid grid-cols-2 gap-3 p-4">
        {data &&
          data.map((post) => (
            <Post key={post.id} post={post} setLink={(link) => setLink(link)} />
          ))}

        <div ref={loader}></div>
      </div>

      {isLoading && <Loading />}

      {error && <Error message={error} />}
    </div>
  );
};

export default PostContainer;
