import { Link } from "react-router-dom";

export default function MoreCoursesBtn() {
  return (
    <div className={"w-full flex justify-center mt-4"}>
      <Link
        to={"/courses"}
        className={
          "group relative px-8 py-3 bg-[#000000] border border-[#ff0000] rounded font-bold text-sm tracking-widest text-[#ff0000] uppercase transition-all duration-300 hover:bg-[#ff0000] hover:text-white hover:cyber-glow-electric"
        }
      >
        <span
          className={
            "absolute right-0 top-0 h-1 w-3 bg-[#ff0000] -mt-1 -mr-0.5"
          }
        ></span>
        <span
          className={
            "absolute left-0 bottom-0 h-1 w-3 bg-[#ff0000] -mb-1 -ml-0.5"
          }
        ></span>
        مشاهده همه دوره‌های آموزشی
      </Link>
    </div>
  );
}
