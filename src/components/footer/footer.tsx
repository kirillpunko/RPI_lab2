import "./footer.css";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return <footer className="footer">{t("footer")}</footer>;
};

export default Footer;
