import "./intro.css";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className="intro">
      <div className="intro_block">
        <div className="intro_welcome">{t("intro-title")}</div>
        <div className="intro_win">{t("intro-subtitle")}</div>
      </div>
    </div>
  );
};

export default Intro;
