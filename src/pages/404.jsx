import Header from "./../layouts/Header/Main";
import Footer from "./../layouts/Footer/Main";
import Title from "./../components/404/Title";
import Badge from "./../components/404/Badge";
import TitleAndDescription from "./../components/404/TitleAndDescription";
import Buttons from "./../components/404/Buttons";

export default function Notfound() {
  return (
    <>
      <Header />
      <main
        className={
          "flex-grow flex flex-col items-center justify-center p-6 text-center z-10"
        }
      >
        <Title />
        <Badge />
        <TitleAndDescription />
        <Buttons />
      </main>
      <Footer />
    </>
  );
}
