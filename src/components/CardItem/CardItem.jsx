import { Link } from "react-router-dom";
import s from "./CardItem.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { API_URL } from "../../const";

export const CardItem = ({ data }) => (
  <li>
    <article className={s.card}>
      <Link to={`/product/${data.id}`} className={`${s.link} ${s.linkImg}`}>
        <img
          src={`${API_URL}${data.images[0]}`}
          alt={data.name}
          className={s.img}></img>
      </Link>

      <div className={s.info}>
        <h3 className={s.title}>
          <Link to="/product/${data.id}" className={s.link}>
            {data.name}
          </Link>
        </h3>

        <p className={s.price}>{data.price}₽</p>
      </div>

      <button className={s.btn}>В корзину</button>
      <button className={s.favorite}>
        <FaRegHeart className={s.svg} aria-label="Избранное" />
      </button>
    </article>
  </li>
);
