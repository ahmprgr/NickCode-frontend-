import { useState } from "react";
import { login } from "./../../../services/auth";
import { notify } from "../../../utils/ToastMessage";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  function setUserInputHandler(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await login(userInput);
      notify("احراز موفق", res.data.message, "success");
      if (res.data.userObj.role === "user") {
        navigate("/user/dashboard");
      } else {
        navigate("/admin/dashboard");
      }
    } catch (e) {
      notify("احراز ناموفق", e.response.data.message, "error");
    }
  }
  return (
    <form className={"space-y-5"} onSubmit={submitHandler}>
      <div className={"space-y-1 group"}>
        <label
          className={
            "block text-xs font-bold text-slate-400 group-focus-within:text-[#ff0000] transition-colors"
          }
        >
          پست الکترونیکی
        </label>
        <div className={"relative cyber-glow-focus rounded transition-all"}>
          <input
            type="email"
            value={userInput.fullname}
            onChange={setUserInputHandler}
            name="email"
            placeholder="مثال: info@nickcode.ir"
            className={
              "w-full bg-[#3d0000]/10 text-white text-sm rounded p-3 pr-4 border border-[#3d0000] focus:outline-none focus:border-[#950101] text-right placeholder-slate-600"
            }
          />
        </div>
      </div>
      <div className={"space-y-1 group"}>
        <label
          className={
            "block text-xs font-bold text-slate-400 group-focus-within:text-[#ff0000] transition-colors"
          }
        >
          کلمه عبور
        </label>
        <div className={"relative cyber-glow-focus rounded transition-all"}>
          <input
            type="password"
            value={userInput.fullname}
            onChange={setUserInputHandler}
            name="password"
            placeholder="مثال: 12345678"
            className={
              "w-full bg-[#3d0000]/10 text-white text-sm rounded p-3 pr-4 border border-[#3d0000] focus:outline-none focus:border-[#950101] text-right placeholder-slate-600"
            }
          />
        </div>
      </div>
      <div className={"flex items-center gap-2 pt-2"}>
        <input
          type="checkbox"
          id="terms"
          className={
            "w-4 h-4 rounded bg-[#000000] border-[#3d0000] text-[#ff0000] focus:ring-0 focus:ring-offset-0 accent-[#950101]"
          }
        />
        <label
          for="terms"
          className={"text-xs text-slate-400 cursor-pointer select-none"}
        >
          قوانین و ضوابط فنی حریم خصوصی پلتفرم را می‌پذیرم.
        </label>
      </div>
      <div className={"pt-4"}>
        <button
          type="submit"
          className={
            "w-full bg-[#ff0000] cursor-pointer text-white text-sm font-bold py-3.5 rounded shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:bg-[#950101] transition-all duration-300 tracking-wide uppercase"
          }
        >
          ورود به حساب کاربری
        </button>
      </div>
    </form>
  );
}
