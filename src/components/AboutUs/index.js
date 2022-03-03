import React from "react";
import { Typography } from "@mui/material";
import testImage from "../../assets/images/barney-birthday-cake.png";

function AboutUs() {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        backgroundColor: "#F4EBD0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
      }}
    >
      <img
        src={testImage}
        width="400px"
        height="400px"
        alt="Barney Birthday Cake"
      />
      <div
        style={{
          backgroundColor: "white",
          width: "500px",
          padding: "32px",
        }}
      >
        <Typography
          variant="h6"
          style={{
            borderBottom: "1.5px solid rgb(170, 51, 106)",
            paddingBottom: "8px",
            marginBottom: "16px",
            textAlign: "left",
          }}
        >
          About Us
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </div>
    </div>
  );
}

export default AboutUs;
