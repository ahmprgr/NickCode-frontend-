import { Link } from "react-router-dom";

export default function Title() {
  return (
    <Link to={"/"}>
      <span
        className={
          "text-2xl font-black text-[#ff0000] tracking-wider cyber-text-glow"
        }
      >
        NickCode | نیک کد
      </span>
    </Link>
  );
}
