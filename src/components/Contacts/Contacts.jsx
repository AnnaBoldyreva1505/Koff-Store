import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

import s from "./Contacts.module.scss";
export const Contacts = () => (
  <div className={s.contacts}>
    <a
      href="tel:+1234567890"
      className={`${s.phone} ${s.link}`}
      aria-label="контакты">
      <FaPhoneAlt /> <span>+1234567890</span>
    </a>
    <ul className={s.list}>
      <li className={s.item}>
        <a className={s.link} href="/" aria-label="Instagram">
          <FaInstagram />
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} href="/" aria-label="Youtube">
          <FiYoutube />
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} href="/" aria-label="Whatsapp">
          <FaWhatsapp />
        </a>
      </li>
    </ul>
  </div>
);
