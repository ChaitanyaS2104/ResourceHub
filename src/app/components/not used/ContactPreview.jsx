import React from 'react'
import Image from 'next/image'

const ContactPreview = () => {
  return (
    <div className="rounded-lg shadow-md w-xs glassmorphism object-contain flex justify-center">
      <Image
      src={`/assets/icons/contact.png`} // Placeholder image, replace with actual URL if needed
      alt="Contact Preview"
      width={140}
      height={100}
      />
    </div>
  )
}

export default ContactPreview
