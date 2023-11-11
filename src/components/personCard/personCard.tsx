import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface tPerson {
  name: string;
  photo: string;
  age: number;
  description: string;
}

const PersonCard = (person: tPerson) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/public/photos/polinaGagarina.jpg"
          alt="photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {person.name}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Возраст: {person.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {person.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PersonCard;
