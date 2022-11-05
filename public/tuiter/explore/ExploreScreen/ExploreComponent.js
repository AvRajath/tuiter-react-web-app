import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="row">
                <div class="col-11">
                    <i class="fas fa-search" style=" position: absolute; padding: 5px;min-width: 40px;"></i>
                    <input type="text"
                        style="padding-left: 30px;text-align: left; border-radius: 18px; height: 35px;
                        width: 100%; border-width: 0px;"
                        placeholder="Search Tuiter"/>
                    </span>
                </div>      
                <div class="col-1">
                    <a href="explore-settings.html"><i class="fas fa-cog pt-1 fa-2x"></i></a>
                </div>
           </div>
           <ul class="nav nav-tabs mb-2 pt-1" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active bg-primary text-white border-0 border-4 border-bottom border-primary fw-bolder" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link bg-black text-muted" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link bg-black text-muted" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link bg-black text-muted" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link bg-black text-muted" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
           <div class="card wd-card-size border-0">
                <img src="robotics.png" class="card-img-top bg-black" alt="...">
                <div class="card-img-bottom border-0" style="top: -50px; left: 3px; position: relative; height: 1px;">
                    <h2> Amazon Robotics </h2>
                </div>
                ${PostSummaryList()}
           </div>
                
    `);
}
export default ExploreComponent;
