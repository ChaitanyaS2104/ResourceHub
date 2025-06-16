import VideoLinkPreview from "./not used/VideoLinkPreview";
import AudioPreview from "./not used/AudioPreview";
import WebPreview from "./not used/WebPreview";
import ContactPreview from "./not used/ContactPreview";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

//To show the currently uploaded resources
const SingleResCard = ({ res, onDelete }) => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-start p-3 shadow rounded-lg bg-white max-w-4xl position-relative gap-3 md:flex-row flex-col">
      <div className="self-center max-w-2xs">
        {res.res_type == "video" && <VideoLinkPreview url={res.res_link} />}
        {res.res_type == "audio / podcast" && (
          <AudioPreview url={res.res_link} />
        )}
        {res.res_type == "article / blog" && <WebPreview />}
        {res.res_type == "social media handle" && <ContactPreview />}
        {res.res_type == "website details" && <WebPreview />}
      </div>
      <div className="space-y-1 flex-1">
        <h2 className="text-xl font-semibold mb-2">{res.res_name}</h2>
        <p className="text-gray-700 text-sm">{res.description}</p>
        <div className="border-b-1 border-[#c7c7c7] w-full"></div>
        <a
          href={res.res_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-xs"
        >
          {res.res_link}
        </a>
        <p className="text-xs text-gray-700 font-semibold">{res.res_owner}</p>
        <p className="text-xs text-gray-600">Type: {res.res_type}</p>
      </div>
      {pathname == "/create-resourceBook" && (
      <button
        onClick={onDelete}
        className="h-8 px-3 text-sm text-white rounded-full orange_gradient border-1 border-amber-600 cursor-pointer hover:scale-[1.04]"
      >
        Remove
      </button>
      )} 
    </div>
  );
};

export default SingleResCard;
