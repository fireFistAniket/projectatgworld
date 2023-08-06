import React from "react";
import headerImg from "../assets/Faulty-MacBook-Pro-Los-Angeles.jpg";
const Header = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={headerImg}
            class="d-block w-100 object-fit-cover"
            alt="..."
            style={
               { height: "55vw" }
            }
          />
          <div
            class="carousel-caption d-block start-0 end-0 bottom-0 text-start ps-4 bg-dark pb-0"
            style={{ "--bs-bg-opacity": ".7" }}
          >
            <h5 className="text-capitalize">computer engineering</h5>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
