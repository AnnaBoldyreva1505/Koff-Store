import s from "./CardItem.module.scss";

export const CardItem = () => (
  <article className={s.card}>
    <a href="/product" className={s.linkImg}>
      <img
        src="https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg"
        alt="Кресло с подлокотниками"
        className={s.img}
      />
    </a>
    <h3 className={s.title}>
      <a href="/product" className={s.link}>
        Кресло с подлокотниками
      </a>
    </h3>
    <p className={s.price}>50000 ₸</p>
    <button className={s.btn}>В корзину</button>
    <button className={s.favorite}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none">
        <path
          d="M8.41325 13.8736C8.18658 13.9536 7.81325 13.9536 7.58659 13.8736C5.65325 13.2136 1.33325 10.4602 1.33325 5.79356C1.33325 3.73356 2.99325 2.06689 5.03992 2.06689C6.25325 2.06689 7.32658 2.65356 7.99992 3.56023C8.67325 2.65356 9.75325 2.06689 10.9599 2.06689C13.0066 2.06689 14.6666 3.73356 14.6666 5.79356C14.6666 10.4602 10.3466 13.2136 8.41325 13.8736Z"
          fill="white"
          stroke="#1C1C1C"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </article>
);
