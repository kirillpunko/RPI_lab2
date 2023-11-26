import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./personCard.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface tPerson {
  name: string;
  photo: string;
  age: number;
  description: string;
  id: number;
}

const PersonCard = (person: tPerson) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Card id="personCard" sx={{ width: 0.48 }}>
      <CardActionArea
        onClick={() => {
          navigate(`/RPI_lab2/winners/${person.id}`);
          window.scrollTo(0, 0);
        }}
      >
        <CardMedia
          component="img"
          height="auto"
          image={"photos/" + person.photo}
          alt="photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {person.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {t("age")}
            {person.age}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {person.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PersonCard;
