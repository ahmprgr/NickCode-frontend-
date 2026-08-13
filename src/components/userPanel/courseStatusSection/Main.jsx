import CourseBox from "./CourseBox";

export default function Main() {
  return (
    <div
      id="active-nodes"
      className={"bg-[#000000] border-2 border-[#950101] rounded-lg p-6 relative"}
    >
      <h3 className={"text-lg font-black text-white mb-6 flex items-center gap-2"}>
        <span className={"text-[#ff0000] font-mono"}>[//]</span> مانیتور وضعیت پیشرفت
        ماژول‌های فعال
      </h3>
      <CourseBox />
      <CourseBox />
    </div>
  );
}
