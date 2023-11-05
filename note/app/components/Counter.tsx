'use client';
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return <>
        <p>{count}</p>
        <button onClick={() => setCount((prev : number) => prev + 1)}>숫자 증가시켜보자</button>
    </>;
}