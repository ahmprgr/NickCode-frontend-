import UserInformation from "./UserInformation";
import WorkBox from "./WorkBox";

export default function Main(props) {
  return (
    <div className={"lg:col-span-1 space-y-6"}>
      <UserInformation {...props}/>
      <WorkBox />
    </div>
  );
}
