/* eslint-disable react/prop-types */
export function SubTopicBox({data}) {
    return <div
        id="details-page-sub-topics-container"
        className="details-page-container  details-page-sub-topics-container"
    >
        <div id="course-sub-topics" className="course-sub-topics">
            <ul className="course-sub-topics-list" title="course-sub-topics">
                <li className="course-sub-topic">
                    <h2>{data.topic} Sub Topics</h2>
                </li>
                {data.subtopics.map((subTopic, idx) => (
                    <li key={idx} className="course-sub-topic">
                        <ion-icon
                            class="checkmark"
                            name="checkmark-circle-outline"
                        ></ion-icon>{" "}
                        <h3>{subTopic}</h3>
                    </li>
                ))}
            </ul>
        </div>
    </div>;
}