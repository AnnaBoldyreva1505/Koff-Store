import s from "./Developers.module.scss";
export const Developers = () => (
  <ul className={s.list}>
    <li className={s.item}>
      <span>Designer: </span>
      <a className={s.link} href="/" target="_blank" rel="noreferrer">
        Anastasiya Ilina
      </a>
    </li>
    <li className={s.item}>
      <span>Developer: </span>
      <a className={s.link} href="/" target="_blank" rel="noreferrer">
        Anna Boldyreva
      </a>
    </li>
  </ul>
);
