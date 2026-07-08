export default function Input() {
  return (
    <>
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
            placeholder="مثال: 12345678"
            className={
              "w-full bg-[#3d0000]/10 text-white text-sm rounded p-3 pr-4 border border-[#3d0000] focus:outline-none focus:border-[#950101] text-right placeholder-slate-600"
            }
          />
        </div>
      </div>
    </>
  );
}
