import Foot from "./elements/Foot";
import Head from "./elements/Head";
import Mid from "./elements/Mid";

export default function CourseBoxItem() {
  return (
    <a
      href="#"
      className={
        "block bg-[#3d0000]/5 border-2 border-[#3d0000] rounded-xl overflow-hidden hover:border-[#ff0000]/50 hover:bg-[#3d0000]/10 transition-all duration-300 transform hover:-translate-y-1 hover:cyber-glow group"
      }
    >
      <Head />
      <div className={"p-6 flex flex-col justify-between min-h-[160px]"}>
        <Mid />
        <Foot />
      </div>
    </a>
  );
}
