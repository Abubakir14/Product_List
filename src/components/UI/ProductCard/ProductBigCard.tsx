import * as React from "react";
import { IProduct } from "../../data/models";
import { ReactComponent as LIKED } from "../../../assets/icons/likedbigicon.svg";
import { ReactComponent as LIKE } from "../../../assets/icons/likebigicon.svg";
import { dispatch } from "../../../index";
import ReactImageMagnify from "react-image-magnify";
import {
  Box,
  CardActionArea,
  CardActions,
  Card,
  Typography,
} from "@mui/material";

interface ProductProps {
  product: IProduct;
}

export const ProductBigCard = ({ product }: ProductProps) => {
  const ProductSrc = `https://testbackend.nc-one.com` + `${product.src}`;
  return (
    <>
      <Card
        sx={{
          position: "fixed",
          width: "1165px",
          height: "530px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          top: "185px",
          zIndex: "10",
          background: "#FFFFFF",
          borderRadius: "30px",
          marginLeft: "635px",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <CardActionArea
          sx={{
            width: "450px", // это для того чтобы фоновый width не был 100 % и не покрывал больше половины проостранство
            borderRadius: "60px",
          }}
        >
          <ReactImageMagnify
            {...{
              smallImage: {
                src: `${ProductSrc}`,
                isFluidWidth: true,
                width: 1700,
                height: 1700,
                alt: `${product.name}`,
              },
              largeImage: {
                src: `${ProductSrc}`,
                width: 1700,
                height: 1700,
                alt: `${product.name}`,
              },
            }}
          />
        </CardActionArea>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              width: "601px",
              height: "192px",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "64px",
              lineHeight: "96px",
            }}
          >
            {product.name}
          </Typography>
          <CardActions
            sx={{
              width: "530px",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "65px",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "196px",
                height: "96px",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "64px",
                lineHeight: "96px",
              }}
            >
              ${product.price}
            </Typography>
            <CardActions>
              {product.like ? (
                <LIKED
                  onClick={() =>
                    dispatch({ type: "changeLike", payload: product.id })
                  }
                />
              ) : (
                <LIKE
                  onClick={() =>
                    dispatch({ type: "changeLike", payload: product.id })
                  }
                />
              )}
            </CardActions>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};
