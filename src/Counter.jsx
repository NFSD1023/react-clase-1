const Counter = ({ count, setCount }) => {
  const add = () => {
    setCount(count + 1)
  }

  return (
    <>
      <span>{count}</span>
      <button onClick={add}>Count</button>
    </>
  )
}

export default Counter