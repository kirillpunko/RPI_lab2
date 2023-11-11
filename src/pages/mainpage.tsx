import PersonCard from "../components/personCard/personCard.tsx";
import personsJson from "../assets/persons.json";
import Header from "../components/header/header.tsx";
import Intro from "../components/intro/intro.tsx";
import About from "../components/about/about.tsx";
import DayPerson from "../components/dayPerson/dayPerson.tsx";
import Team from "../components/team/team.tsx";
import Footer from "../components/mainFooter/footer.tsx";

function getRandom(persons: any): number {
  return Math.floor(Math.random() * persons.length);
}
const Mainpage = () => {
  const persons = personsJson;
  const id = getRandom(persons);
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <DayPerson />
      <Team />
      <Footer />
    </div>
  );
};

export default Mainpage;
