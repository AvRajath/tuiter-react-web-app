import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PostItem = ({ post }) => {
    return (
        <div className="border-solid">
            <div className="row">
                <div className="col-2">
                    <img src={post.profilePicture} width={70} className="rounded-circle pt-1 wd-image-1" alt={"test"}/>
                </div>
                <div className="col-10">
                    <div className="float-left">
                        {post.userName}
                        <FontAwesomeIcon icon="fa-solid fa-badge-check" />
                        <i className="float-left text-secondary"> @{post.handle} - {post.time}</i>
                    </div>
                    <div>{post.tagline}</div>
                    <div className="row">
                        <img src={post.postImage} className="rounded" alt={"..."}/>
                    </div>

                    <ul className="nav nav-fill mt-2 text-secondary">
                        <li className="nav-item">
                            <i className="bi bi-chat-left-dots"></i> {post.commentsCount}
                        </li>
                        <li className="nav-item">
                            <i className="bi bi-repeat"></i> {post.retweetsCount}
                        </li>
                        <li className="nav-item">
                            <i className="bi bi-heart-fill"></i> {post.likesCount}
                        </li>
                        <li className="nav-item">
                            <i className="bi bi-upload"></i>
                        </li>
                    </ul>
                </div>
            {/*        </div>*/}
            {/*    </div>*/}
            </div>
        </div>
    );
}
export default PostItem;