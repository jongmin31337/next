'use client';

import { useRouter } from "next/navigation";

export default function Create() {
    const router = useRouter(); // client component에서만 사용가능

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const title = e.target.title.value; // name 이 title인 emlenet
            const body = e.target.body.value;
            const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({title, body})
            }

            fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`, options)
                .then(res => res.json())
                .then(result => {
                    console.log('result', result);
                    const lastid = result.id;
                    // router.refresh()는 서버 컴포넌트를 강제로 다시 랜더링 하도록 하는 기능
                    router.refresh()  
                    router.push(`/read/${lastid}`);
                });
        }}>
            <p>
                <input type="text" name="title" placeholder='title' />
            </p>
            <p>
                <textarea name="body" placeholder='body' />
            </p>
            <p>
                <input type="submit" value="create" />
            </p>
        </form>
    );
}

