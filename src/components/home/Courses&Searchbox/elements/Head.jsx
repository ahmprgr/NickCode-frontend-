export default function Head() {
  return (
    <div
      className={
        "h-36 bg-[#1a0000] border-b border-[#3d0000] flex flex-col justify-between p-4 relative font-mono overflow-hidden"
      }
    >
      <div
        className={
          "absolute inset-0 opacity-20 bg-gradient-to-br from-[#ff0000] to-transparent"
        }
      ></div>
      <div
        className={
          "absolute -right-4 -bottom-4 text-7xl font-black text-[#950101]/10 tracking-tighter select-none"
        }
      >
        HTML
      </div>
      <div className={"flex justify-between items-center z-10"}>
        <span
          className={
            "text-[10px] text-slate-400 tracking-widest bg-black/50 px-2 py-0.5 rounded"
          }
        >
          MOD // 01
        </span>
        <span
          className={
            "w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"
          }
        ></span>
      </div>
      <div
        className={
          "text-2xl font-black tracking-wider text-[#ff0000] drop-shadow-[0_0_5px_#950101] z-10"
        }
      >
        &lt;HTML5&gt;
      </div>
    </div>
  );
}
