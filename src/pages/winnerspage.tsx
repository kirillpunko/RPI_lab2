import Header from "../components/header/header.tsx";
import WinnersBlock from "../components/winnersBlock/winnersBlock.tsx";
import Footer from "../components/footer/footer.tsx";

const Winnerspage = () => {
  return (
    <div>
      <Header type={"winners"} />
      <WinnersBlock />
      <Footer />
    </div>
  );
};

export default Winnerspage;
