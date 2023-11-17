import BlockTitle from "../blockTitle/blockTitle.tsx";
import "./dayPerson.css";
import { Card, CardActionArea, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function getRandom(persons: any): number {
  return Math.floor(Math.random() * persons.length);
}

const DayPerson = () => {
  const { t } = useTranslation();

  const persons = t("persons", { returnObjects: true });
  const data = new Date();
  let id = Number(localStorage.getItem("dayId")) || 0;
  const day = data.getDate();
  if (day != Number(localStorage.getItem("oldData"))) {
    id = getRandom(persons);
    localStorage.setItem("oldData", String(day));
    localStorage.setItem("dayId", String(id));
  } else {
    id = Number(localStorage.getItem("dayId"));
  }
  console.log(data.getDate());
  const navigate = useNavigate();

  return (
    <Card id="dayPerson">
      <CardActionArea
        onClick={() => {
          navigate(`/RPI_lab2/winners/${id + 1}`);
        }}
      >
        <BlockTitle
          color={"white"}
          textTitle={t("dayPerson-title")}
          subtext={t("dayPerson-subtitle")}
        />
        <div className="personInfo">
          <img src={"photos/" + persons[id].photo} alt="person of the day" />
          <div className="dayPersonText">
            <Typography gutterBottom variant="h4" component="div">
              {persons[id].name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Age: {persons[id].age}
            </Typography>
            <Typography variant="body1">{persons[id].description}</Typography>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default DayPerson;
