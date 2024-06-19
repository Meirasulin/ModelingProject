import React from "react";
import { Prop } from "../types/postsTypes";

const Post = ({ post, setLink }: Prop) => {
  return (
    <div className="bg-white shadow rounded-lg">
      <div
        className="flex items-center px-4 py-3"
        onClick={() => setLink(`user/${post.owner.id}/post`)}
      >
        <img
          className="w-12 h-12 rounded-full border-2 border-blue-500 p-1 mr-3"
          src={post.owner.picture}
          alt={`${post.owner.firstName} ${post.owner.lastName}`}
        />

        <h4 className="font-bold text-gray-800">
          {post.owner.firstName} {post.owner.lastName}
        </h4>
      </div>

      <img
        className="w-full h-96 object-cover rounded-b-lg"
        src={post.image}
        alt={post.text}
      />

      <div className="p-4">
        <p className="font-medium text-gray-800">{post.text}</p>

        <div className="mt-4 flex justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <svg
              className="w-8 h-8 text-red-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
              />
              <text
                x="50%"
                y="60%"
                textAnchor="middle"
                fill="#333"
                // className="h-1/3 w-1/3"
              >
                {post.likes}
              </text>
            </svg>
          </div>

          <div className="flex flex-wrap">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-600 text-xs font-medium mr-2 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
