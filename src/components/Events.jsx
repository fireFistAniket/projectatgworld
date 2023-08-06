import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCalendarEvent, BsShareFill } from "react-icons/bs";
const Events = ({ data }) => {
  return (
    <section className="border border-light-subtle d-flex flex-column gap-2 px-4 py-2 my-3">
      <img src={data?.cover_img} alt="" />
      <div className="d-flex flex-column gap-2">
        <p className="text-capitalize fw-medium">{data?.tag}</p>
        <div className="d-flex align-items-center justify-content-between">
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
        <div className="d-flex align-items-center gap-2">
          <div className="d-flex align-items-center gap-1">
            <BsCalendarEvent />
            {data?.date}
          </div>
          <div className="d-flex align-items-center gap-1">
            <MdOutlineLocationOn />
            {data?.location}
          </div>
        </div>
        <button className="btn border border-secondary-subtle w-100 text-success text-capitalize fw-medium">{data?.btnData}</button>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-1">
            <img
              src={data?.profile_pic}
              alt=""
              style={{ width: "10vmin", height: "10vmin" }}
              className="rounded-circle object-fit-cover"
            />
            <h1 className="text-capitalize" style={{ fontSize: "3.3vmin" }}>{data?.name}</h1>
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

export default Events;
