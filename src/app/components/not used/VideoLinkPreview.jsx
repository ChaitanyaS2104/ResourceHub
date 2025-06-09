'use client'
import { useEffect } from "react"; 


function getEmbedInfo(url) {
  // YouTube
  const ytMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&?/]+)/
  );
  if (ytMatch) {
    return {
      platform: "youtube",
      embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}`,
    };
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return {
      platform: "vimeo",
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}`,
    };
  }

  // Facebook (must be public)
  const isFacebook = url.includes("facebook.com") && url.includes("/videos/");
  if (isFacebook) {
    const encoded = encodeURIComponent(url);
    return {
      platform: "facebook",
      embedUrl: `https://www.facebook.com/plugins/video.php?href=${encoded}`,
    };
  }

  // Unsupported
  return {
    platform: "unsupported",
    embedUrl: null,
  };
}

const VideoLinkPreview = ({ url, setUrl }) => {
  const { platform, embedUrl } = getEmbedInfo(url);

  //Clear the previous url
  useEffect(() => {
    setUrl("");
  }, []);

  return (
    <div className="resource_preview rounded-md p-4 w-full max-w-md border bg-white">
      <p className="text-gray-500 text-sm mb-2">Video Preview ({platform})</p>

      {embedUrl ? (
        <iframe
          src={embedUrl}
          className="w-full aspect-video rounded"
          style={platform === "facebook" ? { height: "280px" } : {}}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={`${platform} video`}
        ></iframe>
      ) : (
        <div className="p-4 bg-gray-100 rounded text-sm text-gray-700">
          <p>Preview not available for -</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline break-all"
          >
            {url}
          </a>
        </div>
      )}
    </div>
  );
}

export default VideoLinkPreview;
