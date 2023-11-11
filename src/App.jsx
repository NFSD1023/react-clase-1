import { useEffect, useState } from "react"
import Counter from "./Counter"

import './App.css'
import { Layout } from "./Layout"
import { CatFact } from "./CatFact"
import { CountryViewer } from "./CountryViewer"

function App() {
  // const [count1, setCount1] = useState(0)
  // const [count2, setCount2] = useState(0)

  // const myLogger = () => console.log('hola a todos esta es la suma total: ', count1 + count2);

  // useEffect(myLogger, [count1, count2])


  return (
    // <Layout 
    //   top={<div>suma: {count1 + count2}</div>}
    //   left={<Counter count={count1} setCount={setCount1} counterId="sumar izquierda" />}
    //   right={<Counter count={count2} setCount={setCount2} counterId="sumar derecha" />}
    //   >
    // </Layout>
    <CountryViewer></CountryViewer>
  )
}

export default App
