import Header from "../layouts/Header/Main";
import Footer from "../layouts/Footer";
import HeroSection from "../components/home/HeroSection/Main";
import InfoBoxComponent from "../components/home/InfoBox/Main";
import CourseBoxComponent from "../components/home/Courses&Searchbox/Main";
import CertificateBox from "../components/home/Certificate/Main";

export default function Home() {
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
