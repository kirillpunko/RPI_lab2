import "./timeLine.css";
import timelineJson from "../../assets/timelinePersons.json";
import { Chrono } from "react-chrono";
interface personId {
  id: number;
}
const TimeLine = ({ id }: personId) => {
  const timeLineItems = timelineJson;
  return (
    <div className="timeLineBlock">
      <Chrono items={timeLineItems[id].items} mode="VERTICAL_ALTERNATING" />
    </div>
  );
};

export default TimeLine;
