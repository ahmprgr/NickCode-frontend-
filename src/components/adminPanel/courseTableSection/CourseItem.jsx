export default function CourseBox() {
  return (
    <tr className={"hover:bg-[#3d0000]/5 transition-colors"}>
      <td className={"py-4 font-mono text-slate-500"}>#01-03</td>
      <td className={"py-4 text-white font-bold"}>ایجاد لینک‌ها و صفت href</td>
      <td className={"py-4 text-slate-400 font-mono"}>HTML5</td>
      <td className={"py-4"}>
        <span
          className={
            "text-amber-500 bg-amber-950/20 px-2 py-0.5 rounded border border-amber-900/50 text-[10px]"
          }
        >
          DRAFT_NODE
        </span>
      </td>
      <td className={"py-4 text-left font-mono space-x-left space-x-3"}>
        <button className={"text-blue-400 hover:underline cursor-pointer"}>EDIT</button>
        <button className={"text-[#ff0000] hover:underline cursor-pointer"}>PURGE</button>
      </td>
    </tr>
  );
}
