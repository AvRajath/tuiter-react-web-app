const PostItem = (post) => {
    return(`
        <div>
            <div class="row">
                <div class="col-2">
                    <img src=${post.profilePicture} class="rounded-circle pt-1" style="max-width: 100%; float: left; padding: 5px;"/>
                </div>
                <div class="col-10">
                    <div class="float-left" style="color: white">
                        ${post.userName} 
                        <i class="fa fa-check-circle pt-1 float-left"></i>
                        <class="float-left" style="color: rgb(110,118,125)"> @${post.handle} - ${post.time}</>
                    </div>
                    <div style="color: white">${post.tagline}</div>
                    
                    <div class="card border-0 bg-black">
                         <img src=${post.postImage} class="card-img-top bg-black" alt="...">
                         <li class="list-group-item bg-black">
                             <div class="card-body bg-black">
                                <div class="row" style="color: white; font-weight: bold;">
                                    ${post.topic}
                                </div>
                                <div class="row">
                                    ${post.description}
                                </div>
                                <div class="row">
                                    <i class="fa fa-link text-dark"><a class="text-dark" href="${post.link}">${post.linkText}</a></i>
                                </div>
                             </div>
                         </li>
                 
                    <div class="row pt-2 p-lg-2">
                        <div class="col-3"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-comment wd-icon"></i>${post.commentsCount}</a></div>
                        <div class="col-3"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-retweet wd-icon"></i>${post.retweetsCount}</a></div>
                        <div class="col-3"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-heart wd-heart-icon"></i>${post.likesCount}</a></div>
                        <div class="col-3"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-upload wd-icon"></i></a></div>
                        <div style="clear:both;">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    `);
}
export default PostItem;