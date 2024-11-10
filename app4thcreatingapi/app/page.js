"use client"
import React from 'react'

function page() {

  const handleClick = async () => {
    let data = {
      name: "bhavesh",
      role: "Coder "
    }

    let a = await fetch("/api/add", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    const res = a.json()
    console.log(res);
  }
  return (
    <div>
      <h1>my app</h1>
      <button
        onClick={handleClick}
      >
        click me

      </button>
    </div>
  )
}

export default page
