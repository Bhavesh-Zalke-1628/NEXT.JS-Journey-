import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className=' bg-purple-700 h-16 flex items-center justify-between px-3 text-white'>
            <div className=' logo text-lg font-bold'>
                <Link href='/'>
                    BitLink
                </Link>
            </div>
            <ul className=' flex  items-center justify-center gap-4'>
                <Link href='/'>
                    <li>home</li>
                </Link>
                <Link href='/about'>
                    <li>about</li>
                </Link>
                <Link href='/shorten'>
                    <li>shorten</li>
                </Link>
                <Link href='/contact'>
                    <li>contact</li>
                </Link>
                <li className='  flex gap-3'>
                    <Link href='/generate'>
                        <button className=' bg-purple-500 shadow-lg px-3 rounded-lg font-bold py-1' >
                            Try Now
                        </button>
                    </Link>
                    <Link href='/github'>
                        <button className=' bg-purple-500 shadow-lg px-3 rounded-lg font-bold py-1'>
                            GitHub
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
