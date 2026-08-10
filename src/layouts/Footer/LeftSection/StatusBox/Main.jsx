import NetworkNode from "./NetwokNode";
import SourceShell from "./SourceShell";
import SmallText from "./SmallText";

export default function Main() {
  return (
    <div
      className={
        "text-xs font-mono bg-[#3d0000]/10 p-4 border border-[#3d0000] rounded-xl space-y-2 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(61,0,0,0.2)]"
      }
    >
      <NetworkNode />
      <SourceShell />
      <SmallText />
    </div>
  );
}
