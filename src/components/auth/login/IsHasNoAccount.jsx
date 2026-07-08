import { Link } from "react-router-dom";

export default function IsAlreadyRegistred() {
  return (
    <div className={"mt-6 border-t border-[#3d0000]/60 pt-4 text-center"}>
      <p className={"text-xs text-slate-500"}>
        حساب کاربری ندارید؟
        <Link
          to={"/sign-up"}
          className={"text-[#ff0000] font-bold hover:underline mr-1"}
        >
          ثبت نام کنید
        </Link>
      </p>
    </div>
  );
}
