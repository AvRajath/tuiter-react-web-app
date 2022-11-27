import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import React from "react";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = id => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <li className="list-group-item p-2 bg-transparent">
      <div className="row">
        <div className="col-2">
          <img
            src={tuit.image}
            style={{ height: "50px" }}
            className="img-fluid img-size rounded-circle"
            alt="avatar"
          />
        </div>
        <div className="col col-xl-9 ps-2 mb-2 float-start">
          <strong>{tuit.userName}</strong>
          <span style={{ margin: "0px 5px" }}>
            <i
              style={{
                color: "blue"
              }}
              className="bi bi-patch-check-fill"
            ></i>
          </span>
          <span>
            {" "}
            <i className="fa-solid fa-circle-check"></i>
          </span>
          <span className="text-secondary">
            {tuit.handle} . {tuit.time}
          </span>
          <i
            onClick={() => deleteTuitHandler(tuit._id)}
            className="bi bi-x-lg float-end"
          ></i>
          <br />
          {tuit.tuit}
          <img
            src={tuit.image}
            style={{ height: "400px" }}
            className="img-fluid img-size"
            alt="avatar"
          />
          <TuitStats stats={tuit} />
        </div>
      </div>
    </li>
  );
};

export default TuitItem;
