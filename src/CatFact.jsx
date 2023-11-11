/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Button from "./Button";

export const CatFact = () => {

    const [text, setText] = useState('valor inicial')

    const [refresh, hitRefresh] = useState(false);

    const getFact = async () => {
        const response = await fetch("https://catfact.ninja/fact");
        const responseJson = await response.json();
        const catFact = responseJson.fact;
        setText(catFact)
    }

    useEffect(() => {
        console.log('este es el valor de refresh', refresh)
        getFact()
    }, [refresh])

    return (
        <div className="mainBody">
            <p>{text}</p>
            <Button onClick={() => hitRefresh(!refresh)}>Dame una nueva catFact</Button>
        </div>
    )
}