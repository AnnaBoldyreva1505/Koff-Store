import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Container/Container";
import { fetchCategories } from "../../store/category/category.slice";

import s from "./Catalog.module.scss";

export const Catalog = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <div>Загрузка ...</div>;
  if (error) return <div>Ошибка: ${error}</div>;

  return (
    <nav className={s.catalog}>
      <Container className={s.container}>
        <ul className={s.list}>
          {data.map((item, i) => (
            <li key={i}>
              <a className={s.link} href={`/categories?slug=${item}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
