import PostItem from "./post-item";
import React from "react";
import posts from "./posts.json";
import WhatsHappening from "./whats-happening";
import TuitsList from "../tuits/tuits-list";

const HomeComponent = () => {
  return (
    <div>
      <h4>Home</h4>
      <WhatsHappening />
      <TuitsList />
    </div>
    // <ul className="list-group">
    //     {
    //         posts.map((post, index) => (
    //             <div key={index}>
    //                 <PostItem post={post} />
    //             </div>
    //         ))}
    // </ul>
  );
};

export default HomeComponent;
