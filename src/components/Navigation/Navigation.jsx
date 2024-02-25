import s from "./Navigation.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Navigation = () => (
  <nav className={s.navigation}>
    <Link className={s.link} to="/favorite" aria-label="Избранное">
      {" "}
      <span className={s.text}>Избранное</span>
      <FaRegHeart />
    </Link>
    <Link className={s.link} to="/cart" aria-label="Добавить в корзину">
      <span className={s.text}>Корзина</span>
      <span className={s.count}>(5)</span>
      <FaBasketShopping />
    </Link>
  </nav>
);
