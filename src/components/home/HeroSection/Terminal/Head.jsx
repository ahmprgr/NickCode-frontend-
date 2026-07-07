export default function Head() {
  return (
    <div
      className={
        "bg-[#1c1c1c]/50 border-b border-[#3d0000] px-4 py-2 flex items-center justify-between"
      }
    >
      <div className={"flex space-x-1.5"}>
        <span className={"w-2.5 h-2.5 rounded-full bg-[#ff0000]/30"}></span>
        <span className={"w-2.5 h-2.5 rounded-full bg-amber-500/30"}></span>
        <span className={"w-2.5 h-2.5 rounded-full bg-emerald-500/30"}></span>
      </div>
      <span className={"text-[10px] tracking-widest text-slate-500"}>
        NICKCODE_KERNEL // BASH
      </span>
    </div>
  );
}
