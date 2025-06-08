'use client'
import { useEffect, useState } from "react";

const WebsiteView = ({ url, setUrl })=> {
  const [preview, setPreview] = useState(null);

  //Clear the previous url
  useEffect(() => {
    setUrl("");
    setPreview('')
  }, []);

  useEffect(() => {
    if (!url) return;
    const fetchPreview = async () => {
      const res = await fetch(`/api/LinkPreview/?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      setPreview(data);
    };
    fetchPreview();
  }, [url]);

  if (!preview) return <div>Loading preview...</div>;

  return (
    <a
      href={preview.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-[#c7c7c7] rounded-md overflow-hidden hover:shadow-md transition max-w-sm"
    >
      {preview.image && (
        <img
          src={preview.image}
          alt={preview.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 bg-[#f7f7f7]">
        <h3 className="font-semibold text-sm mb-1">{preview.title}</h3>
        <p className="text-gray-600 text-xs line-clamp-2">
          {preview.description}
        </p>
        <p className="text-xs text-gray-400 mt-2">{preview.url}</p>
      </div>
    </a>
  );
}
export default WebsiteView;