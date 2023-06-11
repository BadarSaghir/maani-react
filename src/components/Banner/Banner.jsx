import PropTypes from "prop-types"
/**
 * 
 * @param {{title:string,description:string}} param0 
 *  
 */
export const Banner = ({title,description}) => {
  return (
    <section className="banner-section">
      <div className="banner">
        <div className="banner-primary"></div>
        <div className="banner-secondary"></div>
        <div className="container banner-custom-container">
          <div className="banner-message">
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