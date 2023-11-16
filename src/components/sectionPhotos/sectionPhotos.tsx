import "./sectionPhotos.css";
interface pictures {
  photo1: string;
  photo2: string;
  photo3: string;
}

const SectionPhotos = (props: pictures) => {
  return (
    <div className="blockPhotos">
      <div className="blockItem">
        <img src={props.photo1} alt="section photo 1" />
      </div>
      <div className="blockItem">
        <img src={props.photo2} alt="section photo 2" />
      </div>
      <div className="blockItem">
        <img src={props.photo3} alt="section photo 3" />
      </div>
    </div>
  );
};

export default SectionPhotos;
