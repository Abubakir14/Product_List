import React from "react";
import { IProduct } from "../../data/models";
import { ReactComponent as LIKEDMINI } from "../../../assets/icons/likedMini.svg";
import { dispatch } from "../../../index";
import { useNavigate } from "react-router-dom";
import {
  Box,
  CardActionArea,
  CardActions,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

interface ProductProps {
  product: IProduct;
}

export const FavoriteProductCard = ({ product }: ProductProps) => {
  // Не стал давать отступы вниз потому что карты в favorites выглядят круче когда они близко расположены на мой взгляд
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: "347px",
        height: "130px",
        backgroundColor: "#FBFBFB",
        borderRadius: "30px",
      }}
    >
      <CardActionArea sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          image={"https://testbackend.nc-one.com" + product.src}
          onClick={() => navigate(`/product_page/${product.id}`)}
          alt={product.name}
          sx={{
            width: "108px",
            height: "108px",
            paddingLeft: "15px",
            paddingBottom: "11px",
            paddingRight: "20px",
            paddingTop: "11px",
          }}
        />
        <CardContent sx={{ padding: "0" }}>
          <Typography
            component="div"
            sx={{
              width: "184px",
              height: "48px",
              fontStyle: "normal",
              fontWeight: "400px",
              fontSize: "17px",
              lineHeight: "24px",
              paddingTop: "20px",
              paddingBottom: "15px",
              color: "#414141",
            }}
          >
            {product.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                width: "45px",
                height: "35px",
                fontStyle: "normal",
                fontWeight: "500",
                paddingRight: "56px",
                fontSize: "24px",
              }}
            >
              ${product.price}
            </Typography>
            <CardActions>
              {product.like ? (
                <LIKEDMINI
                  onClick={() =>
                    dispatch({ type: "changeLike", payload: product.id })
                  }
                />
              ) : (
                ""
              )}
            </CardActions>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
