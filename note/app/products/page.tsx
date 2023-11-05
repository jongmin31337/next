import Link from "next/link";

export default function Products() {
    const products = ["shirt", "pants", "skirt", "shoes"];
    
    return (
        <>
            <h1>제품 소개 페이지!</h1>
            <ul>
                {products.map((product) => <Link href={`/products/${product}`}><li>{product}</li></Link>)}
            </ul>
        </>

    )
}