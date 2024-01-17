import { Goods } from "../../components/Goods/Goods";
import { Catalog } from "../../components/Catalog/Catalog";

import s from "./Main.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/category/category.slice";
import { fetchProducts } from "../../store/products/products.slice";

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  const { data: dataGoods } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        dispatch(fetchCategories()),
        dispatch(fetchProducts()),
      ]);
    };

    fetchData();
  }, [dispatch]);

  if (loadingCategories) return <div>Загрузка ...</div>;
  if (errorCategories) return <div>Ошибка: ${errorCategories}</div>;

  return (
    <main className={s.main}>
      <Catalog data={dataCategories} />
      <Goods data={dataGoods} />
    </main>
  );
};
