export default function Badge() {
  return (
    <div
      className={
        "inline-flex items-center gap-2 bg-[#ff0000]/10 border border-[#ff0000]/30 px-3 py-1 rounded text-xs text-[#ff0000] font-mono tracking-wider"
      }
    >
      <span
        className={"w-1.5 h-1.5 rounded-full bg-[#ff0000] animate-pulse"}
      ></span>
      <span>CORE CORE v2.6 // ON-LINE</span>
    </div>
  );
}
