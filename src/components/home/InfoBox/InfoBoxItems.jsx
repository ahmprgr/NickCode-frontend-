export default function InfoBoxItems() {
  return (
    <div
      className={
        "bg-[#3d0000]/5 border-2 border-[#3d0000] p-6 rounded-xl flex flex-col justify-between hover:border-[#ff0000]/50 hover:bg-[#3d0000]/10 hover:cyber-glow transition-all duration-300 group"
      }
    >
      <div className={"flex justify-between items-start mb-4"}>
        <span
          className={
            "text-[10px] font-mono text-slate-500 group-hover:text-[#ff0000] transition-colors"
          }
        >
          SYS // DATA_03
        </span>
        <svg
          className={"h-5 w-5 text-[#ff0000]"}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
      <div>
        <h3
          className={
            "text-white font-bold text-sm mb-2 group-hover:text-[#ff0000] transition-colors"
          }
        >
          معماری سرعت بالا
        </h3>
        <p className={"text-slate-400 text-xs leading-relaxed"}>
          دسترسی فوق‌العاده سریع به فایل‌ها و ویدیوها به واسطه لایه CDN اختصاصی
          پلتفرم.
        </p>
      </div>
    </div>
  );
}
