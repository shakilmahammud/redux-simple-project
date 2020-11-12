import React from "react";
import { useSelector } from "react-redux";
import { PostDetail } from "../PostDetails/PostDetail";

export const PostList = () => {
  const { posts } = useSelector(state => state)
  return (
    <div className="container">
      <div className="row">
        {posts &&
          posts.map((post) => <PostDetail post={post} key={post.id} />)}
      </div>
    </div>
  );
}

