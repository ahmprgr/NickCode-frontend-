import Header from "./../../layouts/Header/Main";
import Footer from "./../../layouts/Footer/Main";
import Sidebar from "./sidebar/Main";
import InfoSection from "./infoSection/Main";
import CourseTable from "./courseTableSection/Main";
import { useEffect, useState } from "react";
import { getMe } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { notify } from "./../../utils/ToastMessage";
export default function Main() {
  const navigate = useNavigate();
  let [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const result = await getMe();
        setUser(result.data.user);
        if (result.data.user.role === "user") {
          navigate("/user/dashboard");
        }
      } catch (error) {
        notify(
          "نشست شما منقضی شده است",
          error.response?.data?.message,
          "warning",
        );
        navigate("/sign-in");
      }
    })();
  }, []);

  return (
    <>
      <Header {...user }/>
      <section class="bg-[#000000] text-white min-h-screen flex flex-col justify-between overflow-x-hidden select-none">
        <main class="flex-grow pt-24 pb-12 px-4 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Sidebar {...user }/>
          <div class="lg:col-span-3 space-y-6">
            <InfoSection />
            <CourseTable />
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}
