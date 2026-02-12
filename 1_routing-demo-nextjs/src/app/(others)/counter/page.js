import Counter from "./Counter"

export const metadata = {
  title : {
    default : "Counter"
  }
}

export default function CounterPage() {
  return (
    <>
      <Counter/>
    </>
  )
}