"use client"
import React, { useState } from 'react'

const Shorten = () => {
    const [url, setUrl] = useState()
    const [shortUrl, setShortUrl] = useState()
    const [generated, setgenerated] = useState();

    return (
        <div className=' mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className=' font-bold text-2xl'>Generate your short URL</h1>
            <div className=' flex flex-col gap-2'>
                <input
                    value={url}
                    type="text"
                    placeholder='Enter your URL'
                    onChange={(e) => setUrl(e.target.value)}
                    className=' px-4 py-2 focus:outline-purple-600 rounded-lg '
                />
                <input
                    value={setShortUrl}
                    className=' px-4 py-2 focus:outline-purple-600 rounded-lg '
                    type="text"
                    placeholder='Enter prefered short URL'
                    onChange={(e) => setShortUrl(e.target.value)}

                />
                <button
                    className=' bg-purple-600 py-2 shadow-lg text-white font-bold text-lg rounded-lg p-3 cursor-pointer my-3 hover:bg-purple-500 transition-all ease-in-out duration-300'
                >Generate</button>
            </div>
        </div>
    )
}

export default Shorten
