import Header from "../components/header/header.tsx";
import PersonPhotoBlock from "../components/personPhotoBlock/PersonPhotoBlock.tsx";
import { useParams } from "react-router-dom";
import "../app.css";
import TimeLine from "../components/timeline/timeLine.tsx";
import SectionPhotos from "../components/sectionPhotos/sectionPhotos.tsx";
import YoutubeBlock from "../components/youtubeBlock/youtubeBlock.tsx";
import MapsBlock from "../components/mapsBlock/mapsBlock.tsx";
import Footer from "../components/footer/footer.tsx";
import PersonBlockTitle from "../components/personBlockTitle/personBlockTitle.tsx";
import { useTranslation } from "react-i18next";

const PersonPage = () => {
  const { t } = useTranslation();
  const params = useParams();
  const paramsId = Number(params.personId) - 1;

  const persons = t("persons", { returnObjects: true });
  return (
    <div>
      <Header type={"person"} />
      <div className="personPageBlock">
        <TimeLine id={paramsId} />
        <PersonPhotoBlock
          photo={persons[paramsId].avatar || "../../public/photos/icon1/jpg"}
          age={persons[paramsId].age}
          id={paramsId}
          name={persons[paramsId].name}
        />
      </div>
      <PersonBlockTitle str={t("personPage-gallery")} />
      <SectionPhotos
        photo1={persons[paramsId].galerrey1}
        photo2={persons[paramsId].galerrey2}
        photo3={persons[paramsId].galerrey3}
      />
      <PersonBlockTitle str="Youtube" />
      <YoutubeBlock reference={persons[paramsId].youtube} />
      <PersonBlockTitle str={t("personPage-map")} />
      <MapsBlock reference={persons[paramsId].map} />
      <Footer />
    </div>
  );
};

export default PersonPage;
