import { Link } from "react-router-dom";
import { logout } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { notify } from "../../utils/ToastMessage";

export default function Button(props) {
  const navigate = useNavigate()
  async function logoutHandler() {
    try {
      const res = await logout();
      notify("خروج موفق", res.data.message, "success");
      navigate("/sign-in")
    } catch (e) {
      notify("خروج ناموفق", e.response.data.message, "error");
    }
  }
  return (
    <div>
      {props ? (
        <div
          onClick={logoutHandler}
          class="text-slate-400 cursor-pointer hover:text-[#ff0000] transition-colors font-mono text-xs"
        >
          LOGOUT &times;
        </div>
      ) : (
        <Link
          to={"/sign-in"}
          className={
            "bg-[#3d0000]/40 text-white px-5 py-2 rounded border border-[#950101] hover:bg-[#950101] hover:border-[#ff0000] hover:cyber-glow transition-all duration-300 text-sm font-bold tracking-wide"
          }
        >
          ورود / ثبت نام
        </Link>
      )}
    </div>
  );
}
