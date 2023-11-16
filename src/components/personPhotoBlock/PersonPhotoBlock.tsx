import "./PersonPhotoBlock.css";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface person {
  name: string;
  age: number;
  photo: string;
  id: number;
}
const PersonPhotoBlock = (person: person) => {
  const { t } = useTranslation();
  return (
    <div className="photoBlock">
      <Typography variant={"h3"}>{person.name}</Typography>
      <img
        src={"../../../public/photos/personsPages/" + person.photo}
        alt={person.name}
      />
      <div className="pesonAge">
        {t("age")}
        {person.age}
      </div>
    </div>
  );
};

export default PersonPhotoBlock;
