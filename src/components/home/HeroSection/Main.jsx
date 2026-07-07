import RigthSection from "./RightSection/Main";
import TerminalSection from "./Terminal/Main"

export default function Main() {
  return (
    <section
      className={
        "w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 border border-[#3d0000] bg-[#3d0000]/5 p-6 md:p-10 rounded-xl relative overflow-hidden"
      }
    >
      <div
        className={
          "absolute top-0 left-0 w-32 h-32 bg-[#ff0000]/5 blur-3xl pointer-events-none"
        }
      ></div>
      <RigthSection />
      <TerminalSection />
    </section>
  );
}
