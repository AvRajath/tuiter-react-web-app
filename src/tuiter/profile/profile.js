import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const profileData = useSelector(state => state.profile);
  console.log(profileData);
  return (
    <div>
      <div className="row">
        <div className="col-11">
          <div className={"fw-bold"} style={{ fontSize: 25 }}>
            {profileData.firstName} {profileData.lastName}
          </div>
          <div className="pb-2" style={{ color: "gray" }}>
            {profileData.noOfTuits} Tweets
          </div>
        </div>
      </div>

      <img
        src={profileData.bannerPicture}
        className="rounded row pos-relative"
        width={640}
        alt={"banner"}
      />
      <ul className="list-group">
        <li className="list-group-item row border-0 profile-picture">
          <div>
            <img
              src={profileData.profilePicture}
              className="rounded-circle float-left w-50 h-50  position-relative "
              alt="User avatar"
            />

            <Link to={"/tuiter/edit-profile"}>
              <button className="row btn rounded-pill border float-right fw-bold wd-margin">
                Edit Profile
              </button>
            </Link>
          </div>
        </li>

        <li className="list-group-item border-0"></li>
      </ul>

      <div>{profileData["name"]}</div>
      <div>@{profileData["handle"]}</div>
      <hr />
      <div>About {profileData["bio"]}</div>
      <hr />
      <div>
        <span className="bi bi-pin-map float-left col-4">
          {profileData["location"]}
        </span>
        <span className="bi bi-balloon float-left col-4">
          {" "}
          Born {profileData["dateOfBirth"]}
        </span>
        <span className="bi bi-calendar-check float-left col-4">
          {" "}
          Joined {profileData["dateJoined"]}
        </span>
      </div>
      <hr />
      <div className="row pt-2 ">
        <span className="float-left col-5 float-start">
          <span className="fw-bold">{profileData["followingCount"]}</span>{" "}
          Following
        </span>
        <br />
        <span className=" float-left col-5 float-end">
          <span className="fw-bold"> {profileData["followersCount"]}</span>{" "}
          Followers
        </span>
      </div>
      <hr />
    </div>
  );
};

export default Profile;
