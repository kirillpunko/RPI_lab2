import "./header.css";
import MainNavigation from "../navigation/mainNavigation.tsx";
import WinnersNavigation from "../winnersNavigation/winnersNavigation.tsx";

interface type {
  type: string;
}

const Header = (props: type) => {
  let ismain = false;
  if (props.type === "main") {
    ismain = true;
  }

  return (
    <header className="mainHeader">
      <img src="/photos/logo.png" alt="logo" />
      {ismain ? <MainNavigation /> : <WinnersNavigation />}
    </header>
  );
};

export default Header;
