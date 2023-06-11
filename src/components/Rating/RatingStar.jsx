import PropTypes from "prop-types";
import style from "./RatingStar.module.css";
const RatingStar = ({ isNotRatted = true }) => {
  return (
    <div className={`${style["star-border"]}`}>
      <div className={`${style["second-level-star"]}`}>
        {isNotRatted ? <div className={`${style["star-color-fill"]}`}></div>:''}
      </div>
    </div>
  );
};
RatingStar.propTypes = {
    isNotRatted: PropTypes.bool,
};
export default RatingStar;
