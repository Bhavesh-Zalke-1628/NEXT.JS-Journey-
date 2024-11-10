import { NextResponse } from "next/server";

export async function POST(request) {
    // Use request.json() properly in the new API route setup
    const data = await request.json();
    console.log("Received Data:", data);

    return NextResponse.json({
        success: true,
        msg: "Data ok",
        data: data,
    });
}


// import { NextResponse } from "next/server";

// export async function POST(request) {
//     let data = await request.json()
//     console.log(data)
//     return NextResponse.json({ success: true, data })
// }
