import LinkListItem from "./LinkListItem"

export default function LinkList() {
  return (
    <ul className={"text-xs space-y-3 font-mono"}>
      <LinkListItem />
      <LinkListItem />
      <LinkListItem />
    </ul>
  )
}
