import "./header.css";
import MainNavigation from "../navigation/mainNavigation.tsx";
const Header = () => {
  return (
    <header className="mainHeader">
      <img src="/photos/logo.png" alt="logo" />
      <MainNavigation />
    </header>
  );
};

export default Header;
