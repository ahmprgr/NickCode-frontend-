export default function CourseBox() {
  return (
    <div class="space-y-4">
        <div class="border border-[#3d0000] rounded p-4 bg-[#3d0000]/5 hover:border-[#ff0000] transition-colors mt-2">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
            <div>
              <span class="text-xs font-mono text-slate-500 block uppercase tracking-widest">
                MODULE_NODE // 04
              </span>
              <h4 class="text-sm font-bold text-white mt-0.5">
                دوره تخصصی وب سرور با Express.js
              </h4>
            </div>
            <span class="text-xs font-mono text-slate-400 mt-1 sm:mt-0">
              20% COMPLETE
            </span>
          </div>
          <div class="w-full bg-[#1c0000] h-2 rounded overflow-hidden p-0.5 border border-[#3d0000]">
            <div
              class="bg-[#950101] h-full rounded"
              style={{ width: "20%" }}
            ></div>
          </div>
          <div class="flex justify-between items-center mt-3 text-[11px]">
            <span class="text-slate-500">
              مبحث بعدی: راه‌اندازی اولین HTTP Server و پورت‌ها
            </span>
            <a
              href="course-intro.html"
              class="text-white font-bold hover:underline font-mono text-xs"
            >
              RESUME_SESSION &larr;
            </a>
          </div>
        </div>
      </div>
  )
}