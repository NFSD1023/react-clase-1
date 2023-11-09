const Adult = ({ age }) => {
  // if (age >= 18) {
  //   return <div>Eres mayor de edad, bienvenido</div>
  // } else {
  //   return <div>Espera unos años para entrar</div>
  // }

  return (
    <div>
      {age >= 18 ? "Eres mayor de edad" : "Espera unos años para entrar"}
    </div>
  )
}

export default Adult