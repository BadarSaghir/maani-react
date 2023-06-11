import PropTypes from "prop-types"
import styles from "./Banner.module.css"
/**
 * 
 * @param {{title:string,description:string}} param0 
 *  
 */
export const Banner = ({title,description}) => {
  return (
    <section className={`${styles.bannerSection} `}>
      <div className={`${styles.banner} `}>
        <div className={`${styles.bannerPrimary} `}></div>
        <div className={`${styles.bannerSecondary} `}></div>
        <div className={`${styles.container} ${styles.bannerCustomContainer} `}>
          <div className={`${styles.bannerMessage} `}>
            <h2>{ title}</h2>
            <p>{description }</p>
          </div>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Banner