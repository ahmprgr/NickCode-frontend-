import CourseItem from "./CourseItem";

export default function Main() {
  return (
    <div
      id="data-mutation"
      className={
        "bg-[#000000] border-2 border-[#3d0000] rounded-lg p-6 flex flex-col justify-between"
      }
    >
      <div>
        <div
          className={
            "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6"
          }
        >
          <h4
            className={
              "text-base font-black text-white flex items-center gap-2"
            }
          >
            <span className={"text-[#ff0000] font-mono"}>[//]</span> پایگاه پایش
            و مدیریت مقالات فعال شبکه
          </h4>
          <button
            className={
              "cursor-pointer bg-[#ff0000] hover:bg-[#950101] text-white text-xs font-bold px-4 py-2 rounded transition-all duration-200 shadow-lg tracking-wider"
            }
          >
            + افزودن مقاله جدید
          </button>
        </div>

        <div className={"overflow-x-auto"}>
          <table className={"w-full text-right text-xs"}>
            <thead>
              <tr
                className={
                  "border-b border-[#3d0000] text-slate-500 font-mono uppercase tracking-wider"
                }
              >
                <th className={"pb-3 font-normal"}>DATA_ID</th>
                <th className={"pb-3 font-normal"}>عنوان مبحث فنی</th>
                <th className={"pb-3 font-normal"}>دسته‌بندی سیستم</th>
                <th className={"pb-3 font-normal"}>وضعیت نمایش</th>
                <th className={"pb-3 font-normal text-left"}>عملیات سیستم</th>
              </tr>
            </thead>
            <tbody
              className={
                "divide-y divide-[#3d0000]/40 font-medium text-slate-300"
              }
            >
              <CourseItem />
              <CourseItem />
              <CourseItem />
              <CourseItem />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
