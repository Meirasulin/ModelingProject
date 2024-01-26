import React from "react";
import { Prop } from "../types/postsTypes";

const Post = ({ post, setLink }: Prop) => {
  return (
    <div className="bg-white shadow rounded-lg w-96 mx-auto">
      <div className="flex items-center p-4">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src={post.owner.picture}
          alt={`${post.owner.firstName} ${post.owner.lastName}`}
          onClick={() => setLink(`user/${post.id}/post`)}
        />

        <div>
          <div className="font-bold text-lg">
            {post.owner.firstName} {post.owner.lastName}
          </div>
          <div className="text-sm text-gray-500">{post.publishDate}</div>
        </div>
      </div>

      <div className="px-4 pb-4 h-96 flex flex-col justify-between">
        <p className="text-gray-800 font-normal">{post.text}</p>

        {post.image && (
          <img
            className="w-full max-h-40 object-cover rounded-md"
            src={post.image}
            alt={post.text}
          />
        )}

        <div className="flex justify-between items-center text-gray-500 text-sm">
          <span>{post.likes} Likes</span>

          <div className="flex flex-wrap">
            {post.tags.map((tag) => (
              <span className="bg-gray-200 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
