const NavigationSidebar = (page) => {
    return(`
   <div class="list-group d-none d-lg-block">
     <a class="list-group-item" href="#">
        <i class="fab fa-twitter text-white"></i><br/></a>       
     <a href="../HomeScreen/index.html" class="list-group-item ${page === 'home' ? 'active' : '' }">
        <i class="fa fa-home text-white"> </i> Home</a>
     <a href="../explore/index.html" class="list-group-item ${page === 'explore' ? 'active' : '' }">
        <i class="fa fa-hashtag fw-bold"> </i> Explore </a>
     <a href="#" class="list-group-item">
        <i class="fa fa-bell text-white fw-normal"> </i> Notifications</a>
     <a href="#" class="list-group-item ">
        <i class="fas fa-envelope text-white fw-normal"> </i> Messages</a>
     <a href="../bookmarks/index.html" class="list-group-item">
        <i class="fas fa-bookmark text-white fw-normal"></i> Bookmarks</a>
     <a href="#" class="list-group-item ">
        <i class="fas fa-list text-white "> </i> Lists</a>
     <a href="../profile.html" class="list-group-item">
        <i class="fas fa-user text-white"> </i> Profile</a>
     <a href="#" class="list-group-item">
        <i class="fas fa-ellipsis-h text-white"> </i> More</a>
   </div>
   <div class="list-group d-lg-none">
     <a class="list-group-item" href="#">
        <i class="fab fa-twitter text-white"></i><br/></a>       
     <a href="../home.html" class="list-group-item ${page === 'home' ? 'active' : '' }">
        <i class="fa fa-home text-white"> </i></a>
     <a href="index.html" class="list-group-item ${page === 'explore' ? 'active' : '' }">
        <i class="fa fa-hashtag fw-bold"> </i> </a>
     <a href="#" class="list-group-item">
        <i class="fa fa-bell text-white fw-normal"> </i></a>
     <a href="#" class="list-group-item ">
        <i class="fas fa-envelope text-white fw-normal"> </i></a>
     <a href="../bookmarks/index.html" class="list-group-item">
        <i class="fas fa-bookmark text-white fw-normal"></i></a>
     <a href="#" class="list-group-item ">
        <i class="fas fa-list text-white "> </i></a>
     <a href="../profile.html" class="list-group-item">
        <i class="fas fa-user text-white"> </i></a>
     <a href="#" class="list-group-item">
        <i class="fas fa-ellipsis-h text-white"> </i></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;