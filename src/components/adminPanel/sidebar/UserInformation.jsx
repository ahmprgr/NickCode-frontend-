export default function UserInformation(props) {
  const fullname = props.fullname;
  const id = props.userid
  return (
    <>
      <div
        className={
          "bg-[#000000] border-2 border-[#3d0000] rounded-lg p-5 relative overflow-hidden"
        }
      >
        <div
          className={
            "absolute top-0 left-0 bg-[#3d0000] text-slate-400 font-mono text-[8px] px-2 py-0.5 uppercase"
          }
        >
          SYS_OP
        </div>
        <div
          className={
            "w-20 h-20 rounded-full bg-[#000000] border-2 border-[#ff0000] mx-auto mb-4 flex items-center justify-center font-mono font-black text-xl text-white tracking-widest shadow-[0_0_12px_#3d0000]"
          }
        >
          N_C
        </div>
        <div className={"text-center"}>
          <h2 className={"text-base font-bold text-white"}>{fullname}</h2>
          <p className={"text-xs text-slate-500 font-mono mt-0.5"}>
            {id}
          </p>
        </div>
        <div
          className={
            "mt-6 pt-4 border-t border-[#3d0000] space-y-2 text-xs font-mono text-slate-400"
          }
        >
          <div className={"flex justify-between"}>
            <span>RANK_INDEX:</span>{" "}
            <span className={"text-[#ff0000] font-bold"}>#1,204</span>
          </div>
          <div className={"flex justify-between"}>
            <span>EXP_ACCUM:</span>{" "}
            <span className="text-white">42,900 XP</span>
          </div>
          <div className={"flex justify-between"}>
            <span>COMPLIANCE:</span>{" "}
            <span className={"text-emerald-500"}>100%</span>
          </div>
        </div>
      </div>
    </>
  );
}
