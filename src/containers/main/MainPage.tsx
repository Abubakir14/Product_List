import React from "react";
import { useStoreState } from "../../index";
import { IProduct } from "../../components/data/models";
import { Box, Container } from "@mui/material";
import { ListHeader } from "../../layout/ListHeader";
import { FavoritesBox } from "../../components/favoriotes/Favorites";
import { ProductCard } from "../../components/UI/ProductCard/ProductCard";

export function MainPage() {
  const products = useStoreState("products");

  return (
    <>
      <Container sx={{ marginRight: "auto", marginLeft: "100px" }}>
        <ListHeader />
        <FavoritesBox />
        <Box
          sx={{
            width: "1737px",
            display: "flex",
            margin: "192px auto auto 600px",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "1237px",
            }}
          >
            {products.map((product: IProduct) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}
