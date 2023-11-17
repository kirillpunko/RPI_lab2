import { Link } from "react-router-dom";
import "../mainNavigation/mainNavigation.css";
import { useTranslation } from "react-i18next";
const PersonNavigation = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Link className="navRef" to={"/RPI_lab2/"}>
        {t("personPage-nav-tomain")}
      </Link>
      <Link className="navRef" to={"/RPI_lab2/winners"}>
        {t("personPage-nav-back")}
      </Link>
    </div>
  );
};

export default PersonNavigation;
