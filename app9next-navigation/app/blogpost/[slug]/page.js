
"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
const page = () => {
    const params = useParams()
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/dashboard')
        }, 2000);
    }, []);
    return (
        <>
            <div>
                {params.slug}
            </div>
            <button
                onClick={() => router.push('/dashboard')}
            >

                Dashboard
            </button>
        </>

    )
}

export default page
