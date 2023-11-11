import TeamPerson from "../teamPerson/teamPerson.tsx";
import "./team.css";
import BlockTitle from "../blockTitle/blockTitle.tsx";
const Team = () => {
  return (
    <div>
      <BlockTitle
        color={"black"}
        textTitle={"Meet our team"}
        subtext={"Who we are"}
      />
      <div className="team_block">
        <TeamPerson
          photo={"team1.jpg"}
          name={"Kirill Punko"}
          work={"Web developer"}
          git={"https://github.com/kirillpunko"}
          inst={"#"}
          twit={""}
        />
        <TeamPerson
          photo={"team2.jpg"}
          name={"Vadim Troiskiy"}
          work={"Project manager"}
          git={"#"}
          inst={"#"}
          twit={"#"}
        />
        <TeamPerson
          photo={"team3.jpg"}
          name={"Denis Shpitalenkov"}
          work={"Backend developer"}
          git={"#"}
          inst={"#"}
          twit={"#"}
        />
        <TeamPerson
          photo={"team4.jpg"}
          name={"Evgeniy Belyackiy"}
          work={"UI/UX designer"}
          git={"#"}
          inst={"#"}
          twit={"#"}
        />
      </div>
    </div>
  );
};

export default Team;
