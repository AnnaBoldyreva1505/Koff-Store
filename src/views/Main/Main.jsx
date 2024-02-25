import s from "./Main.module.scss";
import { Goods } from "../../components/Goods/Goods";
import { Catalog } from "../../components/Catalog/Catalog";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCategories } from "../../store/category/category.slice";
// import { fetchProducts } from "../../store/products/products.slice";

export const Main = () => {

  return (
    <main className={s.main}>
      <Catalog data={dataCategories} />
      <Goods data={dataProducts} />
    </main>
  );
};
