"use client"

import React from 'react'

const page = () => {
    return (
        <div className="container">
            hello
            <style jsx>
                {
                    `
.container : {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
    backgroundColor:"yellow";
}                    
                    `
                }

            </style>
        </div>
    )
}

export default page
