import React from "react";
import { ImageList, ImageListItem, Typography } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function importAll(r) {
  let images = {};

  r.keys().map((item) => (images[item.replace("./", "")] = r(item)));

  return images;
}

const images = importAll(
  require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
);

function Gallery() {
  return (
    <div style={{ marginBottom: "64px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <Typography
          variant="h2"
          style={{
            textAlign: "center",
            padding: "0px 32px 4px 32px",
            borderBottom: "3px solid pink",
          }}
        >
          Gallery
        </Typography>
      </div>
      <div
        style={{
          width: "60%",
          margin: "auto",
        }}
      >
        <ImageList variant="quilted" cols={4}>
          {itemData.map((item, i) => (
            <ImageListItem
              key={item.title}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

const itemData = [
  {
    img: images["barney-birthday-cake.png"],
    title: "Barney Birthday Cake",
    rows: 2,
    cols: 2,
  },
  {
    img: images["tiramisu.png"],
    title: "Tiramisu",
  },
  {
    img: images["red-velvet-christmas.png"],
    title: "Red Velvet Cake",
  },
  {
    img: images["minnie-mouse-cake.png"],
    title: "Minnie Mouse Cake",
  },
  {
    img: images["quinceanera.png"],
    title: "Quinceanera",
  },
  {
    img: images["cupcakes-and-macaroons.png"],
    title: "Desserts",
  },
  {
    img: images["minnie-cupcakes.png"],
    title: "Minnie Mouse Cupcakes",
  },
  {
    img: images["mickey-minnie-mouse-birthday.png"],
    title: "Mickey and Minnie Mouse Birthday",
    rows: 2,
    cols: 2,
  },
  {
    img: images["macaroons.png"],
    title: "Macaroons",
  },
  {
    img: images["birthday-shark.png"],
    title: "Baby Shark Cake",
  },
];

export default Gallery;
