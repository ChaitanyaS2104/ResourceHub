import React from 'react'
import Image from 'next/image'

const WebPreview = () => {
  return (
    <div className="rounded-lg shadow-md w-xs glassmorphism object-contain flex justify-center">
      <Image
      src={`/assets/icons/web.png`} // Placeholder image, replace with actual URL if needed
      alt="Web Preview"
      width={140}
      height={100}
      />
    </div>
  )
}

export default WebPreview
