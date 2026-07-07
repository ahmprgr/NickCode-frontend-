export default function Foot() {
  return (
    <div
      className={
        "flex items-center justify-between border-t border-[#3d0000] pt-4 mt-4 text-xs font-mono text-slate-500"
      }
    >
      <span>SYS: READY</span>
      <span className={"text-[#ff0000] font-bold group-hover:cyber-text-glow"}>
        &larr; START
      </span>
    </div>
  );
}
