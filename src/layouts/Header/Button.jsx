import { Link } from "react-router-dom";

export default function Button() {
  return (
    <div>
      <Link
        to={"/sign-in"}
        className={
          "bg-[#3d0000]/40 text-white px-5 py-2 rounded border border-[#950101] hover:bg-[#950101] hover:border-[#ff0000] hover:cyber-glow transition-all duration-300 text-sm font-bold tracking-wide"
        }
      >
        ورود / ثبت نام
      </Link>
    </div>
  );
}
