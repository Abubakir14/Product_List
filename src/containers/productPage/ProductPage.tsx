import React from "react";
import { useStoreState } from "../../index";
import { useParams } from "react-router-dom";
import { ProductListHeader } from "../../layout/ProductListHeader";
import { FavoritesBox } from "../../components/favoriotes/Favorites";
import { ProductBigCard } from "../../components/UI/ProductCard/ProductBigCard";
import { Box } from "@mui/material";

export function ProductPage() {
  const { productID } = useParams();
  const products = useStoreState("products");

  const product = products.find(
    (item: { id: number }) => `${item.id}` === productID
  );

  return (
    <Box
      sx={{
        width: "1948px",
        display: "flex",
        justifyContent: "space-between",
        margin: "100px auto auto auto",
      }}
    >
      <ProductListHeader />
      <Box>
        <FavoritesBox />
        <ProductBigCard product={product} />
      </Box>
    </Box>
  );
}
