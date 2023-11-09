function Button() {
  const handleClick = () => {
    alert('Hola Nuclio')
  }

  return (
    <button onClick={handleClick}>Click</button>
  )
}

export default Button
