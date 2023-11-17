import "./header.css";
import MainNavigation from "../mainNavigation/mainNavigation.tsx";
import WinnersNavigation from "../winnersNavigation/winnersNavigation.tsx";
import PersonNavigation from "../personNavigation/personNavigation.tsx";
import i18next from "i18next";

interface type {
  type: string;
}

localStorage.setItem("lang", "en");
const handleLangSwitch = () => {
  let lng = localStorage.getItem("lang") || "en";
  if (lng == "en") {
    lng = "ru";
  } else {
    lng = "en";
  }
  i18next.changeLanguage(lng);
  localStorage.setItem("lang", lng);
};
const Header = (props: type) => {
  return (
    <header className="mainHeader">
      <img src={"../photos/logo2.png"} alt="logo" />
      {props.type === "main" ? (
        <MainNavigation />
      ) : props.type === "winners" ? (
        <WinnersNavigation />
      ) : (
        <PersonNavigation />
      )}
      <button className="btn-primary" onClick={handleLangSwitch}>
        en/ru
      </button>
    </header>
  );
};

export default Header;
