import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";
const Cards = ({ data }) => {
  return (
    <section className="border border-light-subtle d-flex flex-column gap-2 px-4 py-2 my-3">
      <img src={data?.cover_img} alt="" />
      <div>
        <p className="text-capitalize fw-medium">{data?.tag}</p>
        <div className="d-flex align-items-center">
          <h1 className="fs-4">{data?.title}</h1>
          <button
            className="btn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BiDotsHorizontalRounded size={"2em"} />
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item text-capitalize" href="#">
                edit
              </a>
            </li>
            <li>
              <a class="dropdown-item text-capitalize" href="#">
                report
              </a>
            </li>
            <li>
              <a class="dropdown-item text-capitalize" href="#">
                option3
              </a>
            </li>
          </ul>
        </div>
        <p className="text-truncate">{data?.description}</p>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-1">
            <img
              src={data?.profile_pic}
              alt=""
              style={{ width: "10vmin", height: "10vmin" }}
              className="rounded-circle object-fit-cover"
            />
            <h1 className="text-capitalize" style={{ fontSize: "3.3vmin" }}>
              {data?.name}
            </h1>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div>
              <AiOutlineEye />
              <span>1.4k views</span>
            </div>
            <span class="input-group-text">
              <BsShareFill />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
