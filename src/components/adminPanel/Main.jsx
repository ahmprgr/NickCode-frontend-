import Header from "./../../layouts/Header/Main";
import Footer from "./../../layouts/Footer/Main";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Main() {
  // const location = useLocation()
  // useEffect(() => {
  //   if (location.pathname === "/user/dashboard") {

  //   }
  // }, []);


  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
