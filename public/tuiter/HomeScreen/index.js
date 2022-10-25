
// import PostSummaryList from "./PostSummaryList/index.js";
// import PostList from "./PostList/index.js";
import NavigationSidebar from "../explore/NavigationSidebar/index.js";
import PostSummaryList from "../explore/PostSummaryList/index.js";
import PostItem from "./PostList/index.js";

function homeComponent() {
    $('#wd-home').append(`
    <div class="row mt-2">
        <div class="row">
            <div class="col-3 col-lg-2 col-xl-2">
                ${NavigationSidebar('home')}
            </div>
            <div class="col-9 col-lg-7 col-xl-7">
                ${PostItem()}
            </div>
            <div class="col-lg-3 col-xl-3 d-none d-lg-block ps-4">
              ${PostSummaryList()}
            </div>
        </div>
    </div>`);
}
$(homeComponent);