import React from 'react'
import Image from 'next/image'
function page() {
  return (
    <div>
      <Image
        className=' mx-auto my-5 size-10 bg-yellow-500 relative'

        fill={true}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV8qvGusek2sXuVCDchQH9C4i5-NrqnHfp9w&s"
        alt="" />
    </div>
  )
}

export default page
