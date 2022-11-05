import React from "react";
import PostSummaryItem from "./post-summary-item";
import posts from "./posts.json"

const PostSummaryList = () => {
    return (
        <ul className="list-group">
            {
                posts.map((post, index) => (
                    <div key={index}>
                        <PostSummaryItem post={post} />
                    </div>
                ))}
        </ul>
    );
};
export default PostSummaryList;