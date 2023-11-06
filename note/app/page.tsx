import Counter from './components/Counter';
export const revalidate = 60;

export default function Home() {
  return (
    <>
      <h1>홈페이지</h1>
      <Counter />
    </>
  )
}
