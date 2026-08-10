import { Link } from "react-router-dom";

export default function Buttons() {
  return (
    <div
      className={
        "flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm mb-12"
      }
    >
      <Link
        to={"/"}
        className={
          "w-full sm:w-auto bg-[#ff0000] text-white text-xs font-bold px-8 py-3.5 rounded shadow-[0_0_15px_rgba(255,0,0,0.4)] hover:bg-[#950101] transition-all duration-300 text-center uppercase tracking-wide"
        }
      >
        برگشت به صفحه اصلی
      </Link>

      <Link
        to={"/courses"}
        className={
          "w-full sm:w-auto bg-transparent text-slate-400 hover:text-white text-xs font-bold px-8 py-3.5 rounded border border-[#3d0000] hover:border-[#ff0000] transition-all duration-300 text-center"
        }
      >
        مستندات آموزشی
      </Link>
    </div>
  );
}
