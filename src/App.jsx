import { useState } from "react"
import Counter from "./Counter"

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
      <Counter count={count1} setCount={setCount1} />
      <Counter count={count2} setCount={setCount2} />
      <div>suma: {count1 + count2}</div>
    </>
  )
}

export default App
