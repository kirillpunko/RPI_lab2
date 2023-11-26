import "./timeLine.css";
import { Chrono } from "react-chrono";
import { useTranslation } from "react-i18next";
interface personId {
  id: number;
}
const TimeLine = ({ id }: personId) => {
  const { t } = useTranslation();
  const timeLineItems = t("persons", { returnObjects: true });
  return (
    <div className="timeLineBlock">
      <Chrono items={timeLineItems[id].items} mode="VERTICAL_ALTERNATING" />
    </div>
  );
};

export default TimeLine;
