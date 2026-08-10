import Title from "./Title";
import StatusBox from "./StatusBox/Main"

export default function Main() {
  return (
    <div className={"md:col-span-4 space-y-4"}>
      <Title />
      <StatusBox />
    </div>
  );
}
