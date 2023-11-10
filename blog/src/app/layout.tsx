import Image from 'next/image';
import './global.css'
import logo from '/public/images/logo.png';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
            <nav className="flex justify-between items-center m-auto w-full px-3 xl:w-1580 max-md:flex-col max-md:items-start max-md:px-2 max-md:py-4">
                <div className="flex">
                    {/* <Image src={logo} alt='logo' /> */}
                    <h2 className='p-15 font-NatoSansMidum text-3xl'>JJong Tech</h2>
                </div>

                <ul className="flex p-0 max-md:hidden max-md:flex-col max-md:items-center max-md:w-full">
                    <li className='px-2 py-4 text-xl hover:font-bold'><Link href="/">HOME</Link></li>
                    <li className='px-2 py-4 text-xl hover:font-bold'><Link href="/tech">TECH</Link></li>
                    <li className='px-2 py-4 text-xl hover:font-bold'><Link href="/project">PROJECT</Link></li>
                </ul>

                <a href="" className='hidden absolute right-2 text-2xl max-md:block max-md:py-2'>
                    <FaBars/>
                </a>
            </nav>
            {children}
        </body>
      </html>
    )
}