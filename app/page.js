import Image from "next/image";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import WhoweAre from "./components/WhoweAre/WhoweAre";
import OurServices from "./components/OurServices/OurServices";
import WebDesign from "./components/HomeComponents/WebDesign/WebDesign";
import LatestBuzz from "./components/HomeComponents/LatestBuzz/LatestBuzz";
import OurAssosiate from "./components/OurAssociate/OurAssociate";
import Testimonials from "./components/HomeComponents/Testimonials/Testimonials";
import OurOffice from "./components/HomeComponents/OurOffice/OurOffice";
import HomeContact from "./components/HomeComponents/HomeContact/HomeContact";
import Empowering from "./components/HomeComponents/EmpoweringHome/Empowering";
import BookDemoPopup from "./BookDemoPopup";

export default function Home() {
  return (
    <div>
      <HomeBanner/>
      <WhoweAre/>
      <OurServices/>
      <WebDesign/>
      <LatestBuzz/>
      <OurAssosiate/>
      <Testimonials/>
      <OurOffice/>
      <HomeContact/>
      <Empowering/>
      <BookDemoPopup/>
    </div>
  );
}
