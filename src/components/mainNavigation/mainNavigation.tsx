import "./mainNavigation.css";
import { Link } from "react-router-dom";
import { Link as Anchor } from "react-scroll";
import { useTranslation } from "react-i18next";

const MainNavigation = () => {
  const { t } = useTranslation("ns1");
  return (
    <nav className="navBlock">
      <Anchor to="sectionAbout" duration={500} smooth={true} className="navRef">
        {t("header-about")}
      </Anchor>
      <Anchor
        to="sectionContact"
        duration={500}
        smooth={true}
        className="navRef"
      >
        {t("header-contacts")}
      </Anchor>
      <Anchor
        to="dayPerson"
        offset={1}
        duration={500}
        smooth={true}
        className="navRef"
      >
        {t("header-person-day")}
      </Anchor>
      <Link to={"winners"} className="navRef">
        {t("header-winners")}
      </Link>
    </nav>
  );
};

export default MainNavigation;
