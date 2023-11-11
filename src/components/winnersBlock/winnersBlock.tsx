import personsJson from "../../assets/persons.json";
import PersonCard from "../personCard/personCard.tsx";
import "./winnersBlock.css";
interface tData {
  name: string;
  photo: string;
  age: number;
  description: string;
}

const WinnersBlock = () => {
  const persons = personsJson;
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
        />
      ))}
    </div>
  );
};

export default WinnersBlock;
