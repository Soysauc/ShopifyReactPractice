import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { ShopContext } from "../context/shopContext";

const ProductPage = () => {
  let { handle } = useParams();

  const { fetchProductWithHandle, fetchAllProducts, product } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading...</div>;

  return <h1>{product.title}</h1>;
};

export default ProductPage;
