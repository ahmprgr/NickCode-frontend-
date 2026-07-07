import LinkList from "./LinkList"
import Title from "./Title"

export default function Main() {
  return (
    <div className={"md:col-span-3 space-y-4"}>
      <Title />
      <LinkList />
    </div>
  )
}