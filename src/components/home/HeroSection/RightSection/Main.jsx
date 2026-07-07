import Badge from "./elements/Badge";
import Buttons from "./elements/Buttons";
import Description from "./elements/Description";
import Title from "./elements/Title";

export default function Main() {
  return (
    <div className={"lg:col-span-7 space-y-6 text-right z-10"}>
      <Badge />
      <Title />
      <Description />
      <Buttons />
    </div>
  );
}
