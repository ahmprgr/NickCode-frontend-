export default function WorkBox() {
  return (
    <div
      className={
        "bg-[#000000] border border-[#3d0000] rounded-lg p-2 space-y-1 text-xs font-bold text-slate-400"
      }
    >
      <a
        href="#active-nodes"
        className={
          "flex items-center px-3 py-2.5 bg-[#3d0000]/20 text-[#ff0000] border-r-2 border-[#ff0000] rounded-l font-black"
        }
      >
        <span className={"font-mono ml-2"}>[`{">"}`]</span> ماژول‌های فعال شما
      </a>
      <a
        href="#achievements"
        className={
          "flex items-center px-3 py-2.5 hover:bg-[#3d0000]/10 hover:text-white transition-colors rounded"
        }
      >
        <span className="font-mono ml-2">[ ]</span> کدهای کامپایل شده
      </a>
      <a
        href="#settings"
        className={
          "flex items-center px-3 py-2.5 hover:bg-[#3d0000]/10 hover:text-white transition-colors rounded"
        }
      >
        <span className={"font-mono ml-2"}>[ ]</span> تنظیمات ترمینال کاربری
      </a>
    </div>
  );
}
