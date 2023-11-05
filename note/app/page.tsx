import Image from 'next/image'
import os from 'os' // 노드 APIS
import Counter from './components/Counter';

export default function Home() {
  console.log('안녕!!~');
  console.log(os.hostname());
  return (
    <>
      <h1>홈페이지</h1>
      <Counter />
    </>
  )
}
