import "./mapsBlock.css";
interface reference {
  reference: string;
}
const MapsBlock = (ref: reference) => {
  return (
    <div className="mapBlock">
      <iframe
        className="mapFrame"
        src={ref.reference}
        width="800"
        height="450"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapsBlock;
