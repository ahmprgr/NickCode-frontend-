export default function Content() {
  return (
    <div className={"p-4 space-y-2"}>
      <p className={"text-slate-600"}>&gt; npm install nickcode-core</p>
      <p className={"text-emerald-500"}>
        <span className={"text-slate-500"}>✔</span> Loaded architectural modules
        [4/4]
      </p>
      <p className={"text-slate-600"}>&gt; nickcode --status</p>
      <p className={"text-[#ff0000]"}>Identity Matrix: NickCode Platform</p>
      <p className={"text-slate-400"}>UI/UX Theme: Crimson Obsidian Dark</p>
      <p className={"text-slate-400"}>
        Security Layer: Cyberpunk Standard v2.6
      </p>
      <p className={"text-[#ff0000] animate-pulse mt-4"}>
        &gt; Ready for deployment_
      </p>
    </div>
  );
}
