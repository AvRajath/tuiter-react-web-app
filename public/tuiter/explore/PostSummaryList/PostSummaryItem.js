const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="card-body">
                <div class="row">
                    <div class="col-9">
                        <div class="text-secondary wd-text-size">
                            ${post.topic}
                        </div>
                        <p class="card-text text-white"><b> 
                            ${post.userName} <i class="bi bi-patch-check text-secondary"> - ${post.time} </i></b></p>
                        <p class="card-text text-white"><b>${post.title}</b></p>
                        <div class="text-secondary wd-text-size">
                            ${post.tweets}
                        </div>
                    </div>
                    <div class="col-3">
                        <img src=${post.image} class="rounded" style="width: 100%; padding: 5px;" alt="Cinque Terre"/>
                    </div>
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;