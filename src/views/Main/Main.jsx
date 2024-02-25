import React, { useEffect } from "react";
import { Goods } from "../../components/Goods/Goods";
import { Catalog } from "../../components/Catalog/Catalog";

import s from "./Main.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/category/category.slice";
import { fetchProducts } from "../../store/products/products.slice";

export const Main = () => {
  const dispatch = useDispatch();

  // Деструктурируем значения из стора
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);
  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
  } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        dispatch(fetchCategories()),
        dispatch(fetchProducts()),
      ]);
    };

    fetchData();
  }, [dispatch]);

  // Общая проверка на загрузку или ошибку
  if (loadingCategories || loadingProducts) return <div>Загрузка ...</div>;
  if (errorCategories) return <div>Ошибка: ${errorCategories}</div>;
  if (errorProducts) return <div>Ошибка: ${errorProducts}</div>;

  return (
    <main className={s.main}>
      <Catalog data={dataCategories} />
      <Goods data={dataProducts} />
    </main>
  );
};
