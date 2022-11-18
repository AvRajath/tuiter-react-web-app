import React from "react";
import PostSummaryItem from "./post-summary-item";
import { useSelector } from "react-redux";

const PostSummaryList = () => {
  const posts = useSelector(state => state.tuits);

  return (
    <ul className="list-group">
      {posts.map(post => (
        <div key={post._id}>
          <PostSummaryItem post={post} />
        </div>
      ))}
    </ul>
  );
};
export default PostSummaryList;
