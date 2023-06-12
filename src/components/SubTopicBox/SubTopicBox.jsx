import { FaRegCheckCircle } from "react-icons/fa";
import style from "./SubTopicBox.module.css";
/* eslint-disable react/prop-types */
export function SubTopicBox({ data }) {
  return (
    <div
      id="details-page-sub-topics-container"
      className={`${style["details-page-container"]} ${style["details-page-sub-topics-container"]}`}
    >
      <div id="course-sub-topics" className={`${style["course-sub-topics"]}`}>
        <ul
          className={`${style["course-sub-topics-list"]}`}
          title="course-sub-topics"
        >
          <li className={`${style["course-sub-topic"]}`}>
            <h2>{data.topic} Sub Topics</h2>
          </li>
          {data.subtopics.map((subTopic, idx) => (
            <li key={idx} className={`${style["course-sub-topic"]}`}>
              <span  className={style["checkmark"]}  >
                <FaRegCheckCircle size={"small"} height={'100%'} width={'100%'}/>
              </span>
              <h3>{subTopic}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
