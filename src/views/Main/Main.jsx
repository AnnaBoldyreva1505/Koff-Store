import { Goods } from "../../components/Goods/Goods";
import { Catalog } from "../../components/Catalog/Catalog";

import s from "./Main.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessCategory } from "../../store/category/category.slice";

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategory,
    loading: loadingCategory,
    error: errorCategory,
  } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchAccessCategory());
  }, [dispatch]);

  if (loadingCategory) return <div>Загрузка ...</div>;
  if (errorCategory) return <div>Ошибка: ${errorCategory}</div>;

  return (
    <main className={s.main}>
      <Catalog data={dataCategory} />
      <Goods />
    </main>
  );
};
