import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { FavoriteProductCard } from "../UI/FavoriteProductCard/FavoriteProductCard";
import { IProduct } from "../data/models";
import { useStoreState } from "../../index";
import "./Favorites.scss";

export const FavoritesBox = () => {
  const products = useStoreState("products");

  return (
    <Container style={{ display: "flex", position: "fixed", flexWrap: "wrap" }}>
      <Box
        sx={{
          width: "407px",
          height: "880px",
          left: "100px",
          top: "200px",
          background: "#FFFFFF",
          border: "4px dashed #414141",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: 11,
          "&:hover": {
            borderColor: "#FFCC26",
            transition: "0.4s",
            cursor: "pointer",
          },
        }}
      >
        <Typography
          style={{
            width: "100%",
            height: "36px",
            paddingLeft: "30px",
            paddingTop: "45px",
            paddingBottom: "27px",
            // fontFamily: 'Anek Telugu',  Странно конечно но почему то если включаю фонт фемили то css становится не похожим на тот который на "figma"
            fontStyle: "normal",
            fontWeight: "700px",
            fontSize: "24px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "27px",
            color: "#414141",
          }}
        >
          Favorites
        </Typography>
        <Box
          style={{
            marginLeft: "30px",
            height: "740px",
            width: "390px",
          }}
          className="favoritesBox"
        >
          {products.map((product: IProduct) => {
            if (product.like) {
              return <FavoriteProductCard product={product} key={product.id} />;
            }
          })}
        </Box>
      </Box>
    </Container>
  );
};
