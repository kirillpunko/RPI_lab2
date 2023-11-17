import "./mainNavigation.css";
import { Link } from "react-router-dom";
import { Link as Anchor } from "react-scroll";
import { useTranslation } from "react-i18next";

function closetoggle() {
  const nav = document.querySelector(".navBlock") || document.body;
  const toggle = document.querySelector(".nav-toggle") || document.body;
  nav.classList.remove("active");
  toggle.classList.remove("active");
}

const MainNavigation = () => {
  const { t } = useTranslation("ns1");
  return (
    <div className="navAll">
      <nav className="navBlock">
        <Anchor
          to="sectionAbout"
          duration={500}
          smooth={true}
          className="navRef"
          onClick={() => {
            closetoggle();
          }}
        >
          {t("header-about")}
        </Anchor>
        <Anchor
          to="sectionContact"
          duration={500}
          smooth={true}
          className="navRef"
          onClick={() => {
            closetoggle();
          }}
        >
          {t("header-contacts")}
        </Anchor>
        <Anchor
          to="dayPerson"
          offset={1}
          duration={500}
          smooth={true}
          className="navRef"
          onClick={() => {
            closetoggle();
          }}
        >
          {t("header-person-day")}
        </Anchor>
        <Link to={"winners"} className="navRef">
          {t("header-winners")}
        </Link>
      </nav>
      <button
        className="nav-toggle"
        id="nav-toggle"
        type="button"
        onClick={() => {
          const nav = document.querySelector(".navBlock") || document.body;
          const toggle = document.querySelector("#nav-toggle") || document.body;
          nav.classList.toggle("active");
          toggle.classList.toggle("active");
        }}
      >
        <span className="nav-toggle_item">menu</span>
      </button>
    </div>
  );
};

export default MainNavigation;
