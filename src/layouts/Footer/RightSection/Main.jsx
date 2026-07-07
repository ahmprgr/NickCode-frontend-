import Badge from "./Badge";
import Description from "./Description";
import Title from "./Title";

export default function Main() {
  return (
        <div className={"md:col-span-5 space-y-4"}>
          <div className={"flex items-center gap-3 mb-4"}>
            <Title />
            <Badge />
          </div>
          <Description />
        </div>
  );
}
