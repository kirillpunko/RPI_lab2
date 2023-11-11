import BlockTitle from "../blockTitle/blockTitle.tsx";
import "./dayPerson.css";
import personsJson from "../../assets/persons.json";
import { Card, CardActionArea, Typography } from "@mui/material";

function getRandom(persons: any): number {
  return Math.floor(Math.random() * persons.length);
}

const DayPerson = () => {
  const persons = personsJson;
  const id = getRandom(persons);
  return (
    <Card id="solid">
      <CardActionArea>
        <BlockTitle
          color={"white"}
          textTitle={"Person of the day"}
          subtext={"Who is it today"}
        />
        <div className="personInfo">
          <img
            src={"/public/photos/" + persons[id].photo}
            alt="person of the day"
          />
          <div className="dayPersonText">
            <Typography gutterBottom variant="h4" component="div">
              {persons[id].name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Возраст: {persons[id].age}
            </Typography>
            <Typography variant="body1">{persons[id].description}</Typography>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default DayPerson;
