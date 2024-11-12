"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
function page() {
  const searchParams = useSearchParams()
  return (
    <div>
      {console.log(searchParams.get('bhavesh'))}
    </div>
  )
}

export default page
