import "./youtubeBlock.css";
interface ref {
  reference: string;
}
const YoutubeBlock = (reference: ref) => {
  return (
    <section className="youtubeBlock">
      <iframe
        width="700"
        height="380"
        src={reference.reference}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default YoutubeBlock;
