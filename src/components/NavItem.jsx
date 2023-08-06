import React from "react";
import logo from "../assets/whole.png";
import {
  AiOutlineSearch,
  AiFillCaretDown,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsFillSquareFill, BsFillCircleFill } from "react-icons/bs";
import loginIllus from "../assets/513049-PI8X1G-699-ai.png";
const NavItem = () => {
  return (
    <nav class="navbar navbar-expand-lg position-fixed top-0 start-0 w-100 z-3 pt-0">
      <div
        class="modal fade"
        id="loginModal"
        tabindex="-1"
        aria-labelledby="loginModalLabel"
        data-bs-backdrop="false"
        data-bs-keyboard="false"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered justify-content-center">
          <div class="modal-content w-auto">
            <div class="modal-header">
              <h1
                class="modal-title text-success bg-success text-nowrap"
                id="loginModalLabel "
                style={{ "--bs-bg-opacity": ".3", fontSize: "2vmin" }}
              >
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column flex-md-row justify-content-between gap-5 px-5">
              <div className="d-flex flex-column gap-2">
                <h1 className="text-capitalize">sign in</h1>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                ></input>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                ></input>
                <button className="btn btn-primary rounded-pill text-capitalize">
                  sign in
                </button>
                <button className="btn border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 text-nowrap">
                  <FaFacebook />
                  Sign in with Facebook
                </button>
                <button className="btn border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 text-nowrap">
                  <FcGoogle />
                  Sign in with Google
                </button>
              </div>
              <div className="d-flex flex-column gap-2 align-items-center">
                <p className="d-flex align-items-center text-nowrap">
                  Don't have account yet?{" "}
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#signupModal"
                    className="text-decoration-none text-primary fw-medium btn"
                  >
                    Create new account for free!
                  </button>
                </p>
                <img src={loginIllus} alt="" className="w-50 d-none d-md-inline" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="signupModal"
        tabindex="-1"
        aria-labelledby="signupModalLabel"
        data-bs-backdrop="false"
        data-bs-keyboard="false"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered justify-content-center">
          <div class="modal-content w-auto">
            <div class="modal-header">
              <h1
                class="modal-title text-success bg-success text-nowrap"
                id="loginModalLabel"
                style={{ "--bs-bg-opacity": ".3" , fontSize: "2vmin"}}
              >
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex justify-content-between gap-5 px-5">
              <div className="d-flex flex-column gap-2 w-100">
                <h1 className="text-capitalize">create an account</h1>
                <div className="d-flex">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail3"
                    placeholder="First Name"
                  ></input>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail3"
                    placeholder="Last Name"
                  ></input>
                </div>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                ></input>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                ></input>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword3"
                  placeholder="Confirm Password"
                ></input>
                <button className="btn btn-primary rounded-pill text-capitalize">
                  create account
                </button>
                <button className="btn border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 text-nowrap">
                  <FaFacebook />
                  Sign in with Facebook
                </button>
                <button className="btn border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 text-nowrap">
                  <FcGoogle />
                  Sign in with Google
                </button>
              </div>
              <div className="d-flex flex-column gap-2 align-items-center">
                <p>
                  Already have an account?{" "}
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    className="text-decoration-none text-primary fw-medium"
                  >
                    Sign In
                  </a>
                </p>
                <img src={loginIllus} alt="" className="w-75 d-none d-md-inline" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid justify-content-around d-none d-md-flex bg-light">
        <a class="navbar-brand" href="#">
          <img src={logo} />
        </a>
        <div
          class="d-none d-md-flex align-items-center rounded-pill"
          id="navbarSupportedContent"
        >
          <form
            class="d-flex bg-gradient align-items-center col-xs-4"
            role="search"
          >
            <AiOutlineSearch />
            <input
              class="form-control me-2 bg-transparent border-0 outline-0 shadow-none"
              placeholder="Search your favourite groups in ATG"
              type="search"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p className="d-flex justify-content-center align-items-center fw-semibold me-2">
            Create an account.{" "}
            <button
              className="fw-bolder btn text-primary"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              It's free <AiFillCaretDown />
            </button>
          </p>
        </div>
      </div>
      <div class="container-fluid justify-content-end d-flex d-md-none gap-3 bg-light mb-4">
        <button className="btn btn-light text-secondary px-1 py-0">
          <BsFillSquareFill />
        </button>
        <button className="btn btn-light text-secondary px-1 py-0">
          <BsFillCircleFill />
        </button>
        <button className="btn btn-light text-secondary px-1 py-0">
          <AiFillCaretDown />
        </button>
      </div>
      <div className="d-flex d-md-none justify-content-between w-100 bg-transparent">
        <button className="btn text-light">
          <AiOutlineArrowLeft />
        </button>
        <button className="btn btn-outline-light text-capitalize">
          join group
        </button>
      </div>
    </nav>
  );
};
export default NavItem;
