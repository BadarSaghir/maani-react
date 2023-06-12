/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useSearchTopics } from "../hooks/useSearchTopics";
import { tapWebApiGetDetailByIdParam } from "../constant/ApiEndPoints";
import { SubTopicBox } from "../components/SubTopicBox/SubTopicBox";
import { CourseDetailBox } from "../components/CourseDetailBox/CourseDetailBox";
import style from "../styles/detail.module.css"
const Details = () => {
  const { id } = useParams();
  const { data, isLoading } = useSearchTopics(tapWebApiGetDetailByIdParam(id));
  if (isLoading) return <div>Loading..</div>;
  return (
    <main>
      <section id="details-page" className={style['details-page']}>
        {<CourseDetailBox data={data} />}
        {<SubTopicBox data={data}/>}
      </section>
    </main>
  );
};

export default Details;



