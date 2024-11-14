'use client'

import React from 'react'
const page = async () => {
  console.log('hello world')
  let data = await fetch('http://api.vercel.app/blog', { cache: 'no-store' })
  let post = await data.json()

  return (
    <div>
      <ul>
        {post.map((post) => {
          <li>{post.title}</li>
        })}
      </ul>
    </div>
  )
}

export default page
