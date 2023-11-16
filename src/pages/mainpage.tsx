import Header from "../components/header/header.tsx";
import Intro from "../components/intro/intro.tsx";
import About from "../components/about/about.tsx";
import DayPerson from "../components/dayPerson/dayPerson.tsx";
import Team from "../components/team/team.tsx";
import Footer from "../components/footer/footer.tsx";
const Mainpage = () => {
  return (
    <div>
      <Header type={"main"} />
      <Intro />
      <About />
      <DayPerson />
      <Team />
      <Footer />
    </div>
  );
};

export default Mainpage;
