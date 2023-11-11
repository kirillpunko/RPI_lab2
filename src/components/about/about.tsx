import BlockTitle from "../blockTitle/blockTitle.tsx";
import "./about.css";
import SectionPhotos from "../sectionPhotos/sectionPhotos.tsx";

const About = () => {
  return (
    <section>
      <BlockTitle
        color={"black"}
        textTitle={"About Star factory"}
        subtext={"What TV show is this?"}
      />
      <div className="aboutText">
        "Star Factory" is the Russian version of the successful television
        project of the Dutch production television company Endemol "Star
        Academy". company Gestmusic The idea of the project belongs to the
        Spanish, which is a branch of the Endemol company. However, the first
        country to begin broadcasting the project on October 20 , 2001 was
        France . From that moment on, the show began to spread all over the
        world, including it was released in Russia in 2002 .
      </div>
      <SectionPhotos
        photo1={"/public/photos/about1.jpg"}
        photo2={"/public/photos/about2.jpg"}
        photo3={"/public/photos/about3.jpg"}
      />
    </section>
  );
};

export default About;
