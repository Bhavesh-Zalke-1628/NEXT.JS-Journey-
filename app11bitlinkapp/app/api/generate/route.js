
import clientPromise from "@/lib/mongodb"

export async function POST(req) {
    const body = await req.json()
    const client = await clientPromise
    const db = client.db('bitlinks')
    const collection = db.collection('url')

    // check if the short url is exist 
    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl,
    })
    return Response.json({ sucess: true, error: false, message: 'URl generated successfully' })
}