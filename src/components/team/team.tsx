import TeamPerson from "../teamPerson/teamPerson.tsx";
import "./team.css";
import BlockTitle from "../blockTitle/blockTitle.tsx";
import { useTranslation } from "react-i18next";
const Team = () => {
  const { t } = useTranslation();
  return (
    <section id="sectionContact">
      <BlockTitle
        color={"black"}
        textTitle={t("team-title")}
        subtext={t("team-subtitle")}
      />
      <div className="team_block">
        <TeamPerson
          photo={"team1.jpg"}
          name={t("team1-name")}
          work={t("team1-prof")}
          git={"https://github.com/kirillpunko"}
          inst={"https://www.instagram.com/kirill.punko/"}
          twit={"https://twitter.com/KirillFrizz"}
        />
        <TeamPerson
          photo={"team2.jpg"}
          name={t("team2-name")}
          work={t("team2-prof")}
          git={"https://github.com/tubeamplifierandsound"}
          inst={"https://www.instagram.com/schwarzenegger/"}
          twit={"https://www.youtube.com/watch?v=bH9QHujGILk"}
        />
        <TeamPerson
          photo={"team3.jpg"}
          name={t("team3-name")}
          work={t("team3-prof")}
          git={"#"}
          inst={"#"}
          twit={"#"}
        />
        <TeamPerson
          photo={"team4.jpg"}
          name={t("team4-name")}
          work={t("team4-prof")}
          git={"https://github.com/Evgenuch"}
          inst={"https://www.instagram.com/sadf1nn"}
          twit={"https://twitter.com/soulYo_0"}
        />
      </div>
    </section>
  );
};

export default Team;
