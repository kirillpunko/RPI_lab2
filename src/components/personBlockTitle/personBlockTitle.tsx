import "./personBlockTitle.css";
interface title {
  str: string;
}
const PersonBlockTitle = (props: title) => {
  return <div className="personBlockTitle">{props.str}</div>;
};

export default PersonBlockTitle;
