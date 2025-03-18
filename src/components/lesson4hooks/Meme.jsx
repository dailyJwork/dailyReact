import { useState, useMemo } from "react"

export const Meme = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    const memizedValue = useMemo(() => {
        return a + b
    }, [a, b]);

    return (
        <>
            <button onClick={() => {return setA(prevState => {return prevState + 1})}}>valueA: {a}</button>
            <button onClick={() => {return setB(prevState => {return prevState + 1})}}>valueB: {b}</button>
            <button onClick={() => {return setC(prevState => {return prevState + 1})}}>valueC: {c}</button>
            <p>value: {memizedValue}</p>
        </>
    )
}