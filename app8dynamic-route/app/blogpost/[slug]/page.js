
"use client"

export default async function Page({ params }) {
    let lng = ['c', 'cpp', 'java']
    console.log(lng.includes('c'))
    console.log(await params)
    console.log(await (lng.includes(params)))
    if (lng.includes(params)) {
        return <div>My Post: {slug}</div>
    } else {
        return <div>post not found</div>
    }


}