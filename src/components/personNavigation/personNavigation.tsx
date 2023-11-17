import { Link } from "react-router-dom";
import "./personNavigation.css";
import { useTranslation } from "react-i18next";
const PersonNavigation = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="navBlockPer">
        <Link className="navRefPer" to={"/RPI_lab2/"}>
          {t("personPage-nav-tomain")}
        </Link>
        <Link className="navRefPer" to={"/RPI_lab2/winners"}>
          {t("personPage-nav-back")}
        </Link>
      </div>
      <button
        className="nav-toggle3"
        id="nav-toggle3"
        type="button"
        onClick={() => {
          const nav = document.querySelector(".navBlockPer") || document.body;
          const toggle =
            document.querySelector("#nav-toggle3") || document.body;
          nav.classList.toggle("active");
          toggle.classList.toggle("active");
        }}
      >
        <span className="nav-toggle_item3">menu</span>
      </button>
    </div>
  );
};

export default PersonNavigation;
