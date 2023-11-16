import PersonCard from "../personCard/personCard.tsx";
import "./winnersBlock.css";
import { useTranslation } from "react-i18next";

interface tData {
  name: string;
  photo: string;
  age: number;
  description: string;
  id: number;
}

const WinnersBlock = () => {
  const { t } = useTranslation();
  const persons = t("persons", { returnObjects: true });
  let index = 0;
  return (
    <div className="winnersBlock">
      {persons.map((data: tData) => (
        <PersonCard
          name={data.name}
          photo={data.photo}
          age={data.age}
          description={data.description}
          key={index++}
          id={data.id}
        />
      ))}
    </div>
  );
};

export default WinnersBlock;
