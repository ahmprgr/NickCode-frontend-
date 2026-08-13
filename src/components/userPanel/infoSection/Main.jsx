export default function Main() {
  return (
    <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
      <div
        className={
          "bg-[#000000] border border-[#3d0000] rounded-lg p-4 flex flex-col justify-between min-h-[100px]"
        }
      >
        <span
          className={
            "text-[10px] text-slate-500 font-mono uppercase tracking-wider"
          }
        >
          Courses In Progress
        </span>
        <span className={"text-3xl font-black text-white font-mono mt-2"}>
          02 <span className={"text-xs text-[#ff0000] font-sans"}>دوره</span>
        </span>
      </div>
      <div
        className={
          "bg-[#000000] border border-[#3d0000] rounded-lg p-4 flex flex-col justify-between min-h-[100px]"
        }
      >
        <span
          className={
            "text-[10px] text-slate-500 font-mono uppercase tracking-wider"
          }
        >
          Sandbox Sandscripts Run
        </span>
        <span className={"text-3xl font-black text-white font-mono mt-2"}>
          1,409 <span className={"text-xs text-slate-600 font-sans"}>کد</span>
        </span>
      </div>
      <div
        className={
          "bg-[#000000] border border-[#3d0000] rounded-lg p-4 flex flex-col justify-between min-h-[100px]"
        }
      >
        <span
          className={
            "text-[10px] text-slate-500 font-mono uppercase tracking-wider"
          }
        >
          Completed Checkpoints
        </span>
        <span className={"text-3xl font-black text-emerald-500 font-mono mt-2"}>
          24 / 30
        </span>
      </div>
    </div>
  );
}
