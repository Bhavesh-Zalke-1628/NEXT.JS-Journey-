import React from 'react'
import Link from 'next/link'
function navbar() {
    return (
        <div className=' w-screen h-10 bg-gray-500 capitalize flex items-center justify-between px-4'>
            <h1>logo</h1>
            <ul className=' flex gap-2'>
                <Link href="/"> home</Link>
                <Link href="/about"> about</Link>
                <Link href="/contact"> contact</Link>
            </ul>
        </div>
    )
}

export default navbar
