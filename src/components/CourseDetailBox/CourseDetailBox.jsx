/* eslint-disable react/prop-types */

export function CourseDetailBox({data}) {
    return <div id="course-details-box" className="course-details-box">
        <div
            id="course-details-box-container"
            className="details-page-container"
        >
            <div className="course-details">
                <h4>{data.category}</h4>
                <h5>{data.topic}</h5>
                <div className="star-rating-box">
                    <div className="star-border">
                        <div className="second-level-star"></div>
                    </div>
                    <div className="star-border">
                        <div className="second-level-star"></div>
                    </div>
                    <div className="star-border">
                        <div className="second-level-star"></div>
                    </div>
                    <div className="star-border">
                        <div className="second-level-star"></div>
                    </div>
                    <div className="star-border">
                        <div className="second-level-star">
                            <div
                                id="details-page-star-color-fill"
                                className="star-color-fill"
                            ></div>
                        </div>
                    </div>
                </div>
                <p id="course-details-para">{data.description}</p>
            </div>
            <div
                id="details-page-card-contianer"
                className="details-page-card-contianer"
            >
                <div id="details-page-card" className="details-page-card">
                    <div className="details-page-card-thumbnail">
                        <img
                            src="../images/topics-thumbnails/javascript.jpg"
                            alt="html course" />
                    </div>
                    <div className="details-page-card-custom-container">
                        <h4>
                            <span>HTML</span> by <a href="/">{data.name}</a>
                        </h4>
                        <div
                            id="add-to-favourites-box"
                            className="add-to-favourites-box"
                        >
                            <p>Interested about this topic?</p>
                            <button type="button" className="rounded-0">
                                Add to Favourites{" "}
                                <ion-icon
                                    id="details-page-heart"
                                    class="details-page-heart"
                                    name="heart-outline"
                                ></ion-icon>
                            </button>
                            <h6>Unlimited Credits</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}