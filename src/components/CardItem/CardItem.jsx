import s from "./CardItem.module.scss";
import { FaRegHeart } from "react-icons/fa";

export const CardItem = ({ data }) => (
  <li>
    <article className={s.card}>
      <a href={`/product/${data.id}`} className={`${s.link} ${s.linkImg}`}>
        <img
          src={`https://koff-api.vercel.app/${data.images[0]}`}
          alt={data.name}
          className={s.img}></img>
      </a>

      <div className={s.info}>
        <h3 className={s.title}>
          <a href="/product/567" className={s.link}>
            {data.name}
          </a>
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
