import Button from "./Button"

const Counter = ({ count, setCount, counterId }) => {
  const add = () => {
    setCount(count + 1)
  }

  return (
    <>
      <span>{count}</span>
      {/* <button onClick={add}>Count</button> */}
      <Button onClick={add}>{counterId}</Button>
    </>
  )
}

export default Counter