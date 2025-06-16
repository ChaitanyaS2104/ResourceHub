'use client'
import { useEffect } from "react";

function getAudioPlatform(url) {
  if (url.includes("open.spotify.com")) return "Spotify";
  if (url.includes("audible.com") || url.includes("audible.in")) return "Audible";
  if (url.includes("storytel.com")) return "Storytel";
  return "Audio";
}

const AudioPreview = ({ url })=> {
  const platform = getAudioPlatform(url);

  // Extract Spotify embed URL
  const getSpotifyEmbedUrl = (url) => {
    const match = url.match(/open\.spotify\.com\/show\/([a-zA-Z0-9]+)/);
    if (match && match[1]) {
      return `https://open.spotify.com/embed/show/${match[1]}?utm_source=generator`;
    }
    return null;
  };
  const spotifyEmbedUrl = platform === "Spotify" ? getSpotifyEmbedUrl(url) : null;

  return (
    <div className="p-2 border border-[#c7c7c7] rounded-md max-w-2xs w-full bg-gray-50 flex flex-col items-center gap-3">
      {platform === "Spotify" && spotifyEmbedUrl ? (
        <iframe
          style={{ borderRadius: "12px" }}
          src={spotifyEmbedUrl}
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      ) : (
        <>
          <img
            src={`/assets/audio-icons/${platform}.svg`}
            alt={`${platform} icon`}
            className="bg-gray-200 p-9 rounded max-wd-2xs"
          />
        </>
      )}
    </div>
  );
}

export default AudioPreview;