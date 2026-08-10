import Header from "./../../layouts/Header/Main";
import Footer from "./../../layouts/Footer/Main";
import HeroSection from "./HeroSection/Main";
import InfoBoxComponent from "./InfoBox/Main";
import CourseBoxComponent from "./Courses&Searchbox/Main";
import CertificateBox from "./Certificate/Main"
export default function Main() {
  return (
    <>
      <Header />
      <main
        className={
          "flex-grow pt-24 px-4 pb-12 max-w-7xl mx-auto w-full flex flex-col items-center"
        }
      >
        <HeroSection />
        <InfoBoxComponent />
        <CourseBoxComponent />
        <CertificateBox />
      </main>
      <Footer />
    </>
  );
}
