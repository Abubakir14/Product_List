import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "../utils/constants/constants";
import { MainPage } from "../containers/main/MainPage";
import { ProductPage } from "../containers/productPage/ProductPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={<Navigate to={ROUTES.PRODUCT_LIST_PAGE} />} />
      <Route path="/" element={<Navigate to={ROUTES.PRODUCT_LIST_PAGE} />} />
      <Route path="*" element={<Navigate to={ROUTES.PRODUCT_LIST_PAGE} />} />
      <Route path={ROUTES.PRODUCT_LIST_PAGE} element={<MainPage />} />
      <Route path={ROUTES.PRODUCT_PAGE} element={<ProductPage />} />
    </Routes>
  );
}

export default AppRoutes;
