
"use client"
import React from 'react'
import fs from 'fs/promises'
// import { useState } from 'react'
const page = () => {
  console.log("hello")
  // const [count, setCunt] = useState(0)

  let a = fs.readFile('.gitignore')
  a.then((e) => console.log(e.toString()))
  return (
    <div>
      i am componet
      {/* {count}
      <button onClick={() => setCunt(count + 1)}>click me</button> */}
    </div>
  )
}

export default page
