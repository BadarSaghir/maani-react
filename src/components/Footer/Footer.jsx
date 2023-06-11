import { AiFillHeart } from "react-icons/ai";
import style from "./Footer.module.css";
export const Footer = () => {
 const currentYear = new Date().getFullYear()
  return (
    <footer>
      <div className={`${style["Footer-message"]}`}>
        <h6>
          Developed with{" "}
          <span>
            <AiFillHeart className={`${style["footer-heart"]}`} />
          </span>{" "}
          <span className="copyright">©</span> {currentYear}
        </h6>
      </div>
    </footer>
  );
};
