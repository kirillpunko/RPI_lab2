import "./blockTitle.css";
interface props {
  color: string;
  textTitle: string;
  subtext: string;
}
const BlockTitle = (props: props) => {
  let classtitle = "titleBlock";
  if (props.color === "white") {
    classtitle = classtitle + " white";
  }
  return (
    <div className={classtitle}>
      <div className="section_subtitle">{props.subtext}</div>
      <div className="section_title">{props.textTitle}</div>
    </div>
  );
};

export default BlockTitle;
