import Feed from "./components/Feed"

export default function Home() {
  return (
      <section className="w-full flex-col flex justify-center items-center">
        <h1 className="text-center mt-5 text-5xl font-extrabold sm:text-6xl">
          Discover & Share
          <br className="min-md:hidden"/>
          <span className="orange_gradient text-center"> Curated Resources</span>
        </h1>
        <p className="text-center mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl">
          ResourceHub is an open-source platform for the modern world to discover, collect, and share valuable resources.
        </p>
        <Feed/>
      </section>
  );
}
