"use client"

import { usePathname } from 'next/navigation'
import React from 'react'

function Navbar() {
    const pathname = usePathname()
    return (
        <div>
            navbar
            <div>
                you are inside the {pathname}
            </div>
        </div>

    )
}

export default Navbar
