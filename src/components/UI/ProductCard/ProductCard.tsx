import * as React from "react";
import { IProduct } from "../../data/models";
import { ReactComponent as LIKED } from "../../../assets/icons/liked.svg";
import { ReactComponent as LIKE } from "../../../assets/icons/like.svg";
import { dispatch } from "../../../index";
import { useNavigate } from "react-router-dom";
import {
  Box,
  CardActionArea,
  CardActions,
  Card,
  CardMedia,
  Typography,
} from "@mui/material";

interface ProductProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        sx={{
          width: "262px",
          height: "370px",
          flexDirection: "column",
          top: "185px",
          zIndex: "10",
          background: "#FFFFFF",
          border: "3px dashed #414141",
          borderRadius: "30px",
          marginBottom: "70px",
          marginRight: "30px",
          "&:hover": {
            borderColor: "#FFCC26",
            transition: "0.4s",
            cursor: "pointer",
          },
        }}
      >
        <CardActionArea onClick={() => navigate(`/product_page/${product.id}`)}>
          <CardMedia
            component="img"
            image={"https://testbackend.nc-one.com" + product.src}
            alt={product.name}
            sx={{
              width: "200px",
              margin: "auto",
              paddingLeft: "15px",
              paddingRight: "15px",
              paddingTop: "3px",
            }}
          />
          <Typography
            sx={{
              width: "184px",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
              margin: "auto",
              marginBottom: "3px",
              lineHeight: "30px",
            }}
          >
            {product.name}
          </Typography>
        </CardActionArea>
        <Box
          sx={{
            width: "200px",
            display: "flex",
            margin: "auto",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              width: "45px",
              height: "36px",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "3px",
              fontSize: "24px",
              marginLeft: "6px",
              lineHeight: "36px",
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
        </Box>
      </Card>
    </>
  );
};
