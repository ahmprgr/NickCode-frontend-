export default function Buttons() {
  return (
    <div className={"flex flex-wrap gap-4 pt-2"}>
      <a
        href="#catalog"
        className={
          "px-6 py-3 bg-[#ff0000] hover:bg-[#950101] text-white font-bold text-sm rounded transition-all shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:cyber-glow-electric"
        }
      >
        شروع رمزنویسی / دایرکتوری
      </a>
      <a
        href="#"
        className={
          "px-6 py-3 border border-[#3d0000] hover:border-[#ff0000] hover:bg-[#3d0000]/20 text-slate-300 hover:text-white font-bold text-sm rounded transition-all"
        }
      >
        محیط کامپایلر آنلاین
      </a>
    </div>
  );
}
