import React from "react";
import { Routes, Route } from "react-router-dom";
import { CatalogPage } from "../pages/CatalogPage/CatalogPage";
import { SupportPage } from "../pages/SupportPage/SupportPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import {ProfilePage} from "../pages/ProfilPage/ProfilePage";
import {ProfileChange} from "../components/Profile/ProfileChange/ProfileChange";
import {ProfileBank} from "../components/Profile/ProfileBank/ProfileBank";
import {AuthPage} from "../pages/AuthPage/AuthPage";
import {BasketPage} from "../pages/BasketPage/BasketPage";

export const useRoutes = (isAuth) => {
  if (!isAuth) {
    return (
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/catalog" element={<CatalogPage />}/>
        <Route path="/catalog/:id" element={<ProductPage />}/>
        <Route path="/support" element={<SupportPage />} />
        <Route path="/basket" element={<BasketPage  />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />
      <Route path="/catalog" element={<CatalogPage />}/>
      <Route path="/catalog/:id" element={<ProductPage />}/>
      <Route path="/support" element={<SupportPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/change" element={<ProfileChange />} />
      <Route path="/profile/bank" element={<ProfileBank />} />
      <Route path="/basket" element={<BasketPage  />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}
