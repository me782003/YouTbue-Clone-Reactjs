import React from "react";
import { Stack, Typography } from "@mui/material";
import { categories } from "../utils/constants";


const SideBar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        position: "static",
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat, i) => {
        return (
          <button

            key={i}
            onClick={()=>setSelectedCategory(cat.name)}
            className="category-btn"
            style={{
              backgroundColor: cat.name === selectedCategory && "#FF0808",
              color: "white",
            }}
          >
            <span
              style={{
                color: cat.name === selectedCategory ? "white" : "#FF0808",
              }}
            >
              {cat.icon}
            </span>
            <span
              className="ms-2"
              style={{ opacity: cat.name === selectedCategory ? "1" : "0.8" }}
            >
              {cat.name}
            </span>
          </button>
        );
      })}
      <Typography
        className="copyright"
        variant="body2"
        sx={{ my: 2, color: "#FFF" }}
      >
        Copyright 2023 M Sayed
      </Typography>
    </Stack>
  );
};

export default SideBar;
