import "./timeLine.css";
import { Chrono } from "react-chrono";
import { useTranslation } from "react-i18next";

interface personId {
  id: number;
}
const TimeLine = ({ id }: personId) => {
  const { t } = useTranslation();
  return (
    <div className="timeLineBlock">
      <Chrono
        items={t("persons", { returnObjects: true })[id].items}
        mode="VERTICAL_ALTERNATING"
        allowDynamicUpdate={true}
      />
    </div>
  );
};

export default TimeLine;
