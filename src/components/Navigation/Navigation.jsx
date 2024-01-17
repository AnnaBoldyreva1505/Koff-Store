import s from "./Navigation.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

export const Navigation = () => (
  <nav className={s.navigation}>
    <a className={s.link} href="/favorite" aria-label="Избранное">
      {" "}
      <span className={s.text}>Избранное</span>
      <FaRegHeart />
    </a>
    <a className={s.link} href="/cart" aria-label="Добавить в корзину">
      <span className={s.text}>Корзина</span>
      <span className={s.count}>(5)</span>
      <FaBasketShopping />
    </a>
  </nav>
);
