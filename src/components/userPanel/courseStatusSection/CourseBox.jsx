export default function CourseBox() {
  return (
    <div className={"space-y-4"}>
        <div className={"border border-[#3d0000] rounded p-4 bg-[#3d0000]/5 hover:border-[#ff0000] transition-colors mt-2"}>
          <div className={"flex flex-col sm:flex-row sm:items-center justify-between mb-3"}>
            <div>
              <span className={"text-xs font-mono text-slate-500 block uppercase tracking-widest"}>
                MODULE_NODE // 04
              </span>
              <h4 className={"text-sm font-bold text-white mt-0.5"}>
                دوره تخصصی وب سرور با Express.js
              </h4>
            </div>
            <span className={"text-xs font-mono text-slate-400 mt-1 sm:mt-0"}>
              20% COMPLETE
            </span>
          </div>
          <div className={"w-full bg-[#1c0000] h-2 rounded overflow-hidden p-0.5 border border-[#3d0000]"}>
            <div
              className={"bg-[#950101] h-full rounded"}
              style={{ width: "20%" }}
            ></div>
          </div>
          <div className={"flex justify-between items-center mt-3 text-[11px]"}>
            <span className={"text-slate-500"}>
              مبحث بعدی: راه‌اندازی اولین HTTP Server و پورت‌ها
            </span>
            <a
              href="course-intro.html"
              className={"text-white font-bold hover:underline font-mono text-xs"}
            >
              RESUME_SESSION &larr;
            </a>
          </div>
        </div>
      </div>
  )
}