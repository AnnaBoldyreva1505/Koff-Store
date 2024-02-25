import { register } from "swiper/element/bundle";
// import { Navigation, Thumb } from "swiper/modules";
register();

import { Container } from "../../views/Container/Container";
import s from "./Card.module.scss";

export const Card = () => (
  <section className={s.card}>
    <Container className={s.container}>
      <h2 className={s.title}>Кресло</h2>
      <div className={s.picture}>
        <div>
          <swiper-container>
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
          </swiper-container>
        </div>
      </div>
      <div className={s.info}>Карточка</div>
      <p className={s.price}>5000P</p>
      <p className={s.article}>артикул</p>
      <div className={s.characteristics}>
        <h3>Общие характеристики</h3>
      </div>
    </Container>
  </section>
);
