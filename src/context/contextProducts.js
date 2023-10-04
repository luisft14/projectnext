"use client";
import { createContext, useEffect, useState, useContext } from "react";

export const ProductContext = createContext();

export const useProduct = () => {
  const context = useContext(ProductContext);

  return context;
};

export const ProductProvider = ({ children }) => {
  const [dataProducts, setDataProducts] = useState([]);

  const addProduct = (data) => {
    console.log("data recibida context", data);
    setDataProducts([
      ...dataProducts,data
    ]);
  };

  return (
    <ProductContext.Provider
      value={{
        dataProducts,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
