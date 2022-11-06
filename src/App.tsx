import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { localdata } from "./store/store";
import { dispatch } from "./index";
import axios from "axios";
import { IProduct } from "./components/data/models";

// Css решил делать с помощью sx={{}} прямо внутри компоненты так было удобно потому что библиотека MUI в принципе позволяла это делать

function App() {
  async function fetchProducts() {
    if (!localdata) {
      const response = await axios.get<IProduct[]>(
        "https://testbackend.nc-one.com/image"
      );
      const updatedArray = response.data.map((item) => {
        return { ...item, like: false };
      });
      localStorage.setItem("Products", JSON.stringify(updatedArray));
      dispatch({ type: "addProduct", payload: updatedArray });
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
