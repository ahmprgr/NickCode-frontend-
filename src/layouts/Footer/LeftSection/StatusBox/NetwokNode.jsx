export default function NetworkNode() {
  return (
    <div className={"flex justify-between items-center"}>
      <span className={"text-slate-500"}>NETWORK NODE:</span>
      <div className={"flex items-center gap-2"}>
        <span className={"relative flex h-2 w-2"}>
          <span
            className={
              "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
            }
          ></span>
          <span
            className={
              "relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
            }
          ></span>
        </span>
        <span className={"text-emerald-500 font-bold tracking-wide"}>
          OPERATIONAL
        </span>
      </div>
    </div>
  );
}
