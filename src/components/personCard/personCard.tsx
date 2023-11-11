import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./personCard.css";

interface tPerson {
  name: string;
  photo: string;
  age: number;
  description: string;
}

const PersonCard = (person: tPerson) => {
  return (
    <Card id="personCard" sx={{ maxWidth: 700 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="/public/photos/polinaGagarina.jpg"
          alt="photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {person.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Возраст: {person.age}
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
