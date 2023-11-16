import { Link } from "react-router-dom";
import "../mainNavigation/mainNavigation.css";
import { useTranslation } from "react-i18next";
const PersonNavigation = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Link className="navRef" to={"/"}>
        {t("personPage-nav-tomain")}
      </Link>
      <Link className="navRef" to={"/winners"}>
        {t("personPage-nav-back")}
      </Link>
    </div>
  );
};

export default PersonNavigation;
