import RightSection from "./RightSection/Main";
import MidSection from "./MidSection/Main";
import LeftSection from "./LeftSection/Main"
import EndSection from "./EndSection/Main"

export default function Main() {
  return (
    <footer
      className={
        "w-full bg-[#000000] border-t-2 border-[#3d0000] relative pt-12 pb-6 text-slate-400 overflow-hidden"
      }
    >
      <div
        className={
          "absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ff0000_1px,transparent_1px)] [background-size:16px_16px]"
        }
      ></div>
      <div
        className={
          "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 text-right relative z-10"
        }
      >
        <RightSection />
        <MidSection />
        <LeftSection />
      </div>
      <EndSection />
    </footer>
  );
}
