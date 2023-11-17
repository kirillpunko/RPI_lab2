import BlockTitle from "../blockTitle/blockTitle.tsx";
import "./about.css";
import SectionPhotos from "../sectionPhotos/sectionPhotos.tsx";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="sectionAbout">
      <BlockTitle
        color={"black"}
        textTitle={t("about-title")}
        subtext={t("about-subtitle")}
      />
      <div className="aboutText">{t("about-text")}</div>
      <SectionPhotos
        photo1={"photos/about1.jpg"}
        photo2={"photos/about2.jpg"}
        photo3={"photos/about3.jpg"}
      />
    </section>
  );
};

export default About;
