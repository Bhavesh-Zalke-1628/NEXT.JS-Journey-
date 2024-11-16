"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shortUrl, setShortUrl] = useState("")
    const [generated, setgenerated] = useState('');

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortUrl": shortUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
                setUrl("");
                setShortUrl("")
                console.log(process.env.HOST_PUBLIC_NEXT)
                console.log(result)
                alert(result.message);
            })
            .catch((error) => console.error(error));
    }

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
                    value={shortUrl}
                    className=' px-4 py-2 focus:outline-purple-600 rounded-lg '
                    type="text"
                    placeholder='Enter prefered short URL'
                    onChange={(e) => setShortUrl(e.target.value)}

                />
                <button
                    className=' bg-purple-600 py-2 shadow-lg text-white font-bold text-lg rounded-lg p-3 cursor-pointer my-3 hover:bg-purple-500 transition-all ease-in-out duration-300'
                    onClick={generate}
                >
                    Generate
                </button>
            </div>
            {generated &&
                <>
                    <span className=' font-bold text-lg'>
                        Your Link :
                    </span>
                    <code> <Link href={generated} target="_blank">
                        {generated}
                    </Link>
                    </code>
                </>
            }
        </div>
    )
}

export default Shorten
