import React from "react";

function Banner() {
  return (
    <section
      style={{
        backgroundImage: `url(${require("../../assets/images/hero-bg.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "45% 55%",
        backgroundSize: "cover",
        height: "40rem",
      }}
    ></section>
  );
}

export default Banner;
