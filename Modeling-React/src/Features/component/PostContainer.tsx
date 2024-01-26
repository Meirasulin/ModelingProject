import { useState } from "react";
import PostsHook from "../Hooks/PostsHook";
import Post from "./Post";
import Loading from "./Loading";
import Error from "./Error";
import React from "react";

const PostContainer = () => {
  const [link, setLink] = useState("post");

  const { data, isLoading, error } = PostsHook(link);

  return (
    <div className="max-w-2xl mx-auto p-4">
      {isLoading && <Loading />}
      <div className="grid grid-cols-1 gap-6">
        {data &&
          data.map((post) => (
            <Post key={post.id} post={post} setLink={(link) => setLink(link)} />
          ))}
      </div>

      {error !== "" ? <Error message={error} /> : null}
    </div>
  );
};

export default PostContainer;
