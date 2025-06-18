import Image from 'next/image'
const ContactPreview = () => {
  return (
    <div className="rounded-lg shadow-md w-2xs glassmorphism object-contain flex justify-center">
      <Image
      src={`/assets/icons/contact.png`}
      alt="Contact Preview"
      width={140}
      height={100}
      />
    </div>
  )
}
export default ContactPreview
