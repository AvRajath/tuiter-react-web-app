import PostItem from "./post-item";
import React from "react";
import posts from "./posts.json";

const HomeComponent= () => {
    return (
        <ul className="list-group">
            {
                posts.map((post, index) => (
                    <div key={index}>
                        <PostItem post={post} />
                    </div>
                ))}
        </ul>
    );
};

export default HomeComponent;