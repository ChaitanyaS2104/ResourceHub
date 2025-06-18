import Image from "next/image";

const WebPreview = () => {
  return (
    <div className="rounded-lg shadow-md w-2xs glassmorphism object-contain flex justify-center">
      <Image
        src={`/assets/icons/web.png`}
        alt="Web Preview"
        width={140}
        height={100}
      />
    </div>
  );
};

export default WebPreview;
