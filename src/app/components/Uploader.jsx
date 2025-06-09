import Image from "next/image";

const Uploader = ({setShow, setType}) => {

  return (
    <div className="grid lg:grid-cols-2 grid-cols-3 md:grid-cols-6 max-w-fit gap-5 mt-2.5">
      <button
        type="button"
        onClick={() => {
          setShow(true);
          setType("video");
        }}
      >
        <Image
          src="/assets/icons/zoom.png"
          width={80}
          height={60}
          alt="Upload video"
          className="uploader_img glassmorphism_btn"
        />
      </button>

      <button
        type="button"
        onClick={() => {
          setShow(true);
          setType("audio / podcast");
        }}
      >
        <Image
          src="/assets/icons/audio-book.png"
          width={80}
          height={60}
          alt="Upload audio"
          className="uploader_img glassmorphism_btn"
        />
      </button>

      <button
        type="button"
        onClick={() => {
          setShow(true);
          setType("article / blog");
        }}
      >
        <Image
          src="/assets/icons/newsletter.png"
          width={80}
          height={60}
          alt="Upload blogs/article"
          className="uploader_img glassmorphism_btn"
        />
      </button>

      <button
        type="button"
        onClick={() => {
          setShow(true);
          setType("social media handle");
        }}
      >
        <Image
          src="/assets/icons/advertising.png"
          width={80}
          height={60}
          alt="Upload social media handles"
          className="uploader_img glassmorphism_btn"
        />
      </button>

      <button
        type="button"
        onClick={() => {
          setShow(true);
          setType("website details");
        }}
      >
        <Image
          src="/assets/icons/browser.png"
          width={80}
          height={60}
          alt="Upload website"
          className="uploader_img glassmorphism_btn"
        />
      </button>
    </div>
  );
};

export default Uploader;
