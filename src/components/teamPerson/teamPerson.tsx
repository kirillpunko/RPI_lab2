import "./teamPerson.css";
interface person {
  photo: string;
  name: string;
  work: string;
  git: string;
  inst: string;
  twit: string;
}

const TeamPerson = (props: person) => {
  return (
    <div className="card_all">
      <div className="card_item">
        <div className="card_img">
          <div className="img_text">
            <div className="social">
              <a
                className="social_item"
                href={props.git}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                className="social_item"
                href={props.twit}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                className="social_item"
                href={props.inst}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <img src={"photos/" + props.photo} alt="" />
        </div>
      </div>
      <div className="team_name">{props.name}</div>
      <div className="team_job">{props.work}</div>
    </div>
  );
};

export default TeamPerson;
