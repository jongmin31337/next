'use client';
import styles from './MeowArticle.module.css';
import { useState, useEffect } from "react";

export default  function MeowArticle() {
    const [text, setText] = useState("데이터 준비중"); 
    const res = fetch('https://meowfacts.herokuapp.com', {
        next: {revalidate: 0},
        // cache: 'no-store' // revalidate: 0, serverside Rendering 처럼 동작
    });

    useEffect(() => {
        fetch('https://meowfacts.herokuapp.com').then(res => res.json()).then(data => setText(data.data[0]));
    }, []);
    

    return(
        <article className={styles.article}>
            {text}
        </article>
    );
}