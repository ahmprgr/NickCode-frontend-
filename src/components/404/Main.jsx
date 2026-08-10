import Header from "./../../layouts/Header/Main";
import Footer from "./../../layouts/Footer/Main";
import Title from "./Title";
import Badge from "./Badge";
import TitleAndDescription from "./TitleAndDescription";
import Buttons from "./Buttons";

export default function Main() {
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
