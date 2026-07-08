export default function SubmitBtn() {
  return (
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
  );
}
