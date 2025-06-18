import Feed from "@components/Feed"

export default function Home() {
  return (
      <section className="w-full flex-col flex justify-center items-center">
        <h1 className="text-center head_text">
          Discover & Share
          <br className="min-md:hidden"/>
          <span className="orange_gradient text-center"> Curated Resources</span>
        </h1>
        <p className="text-center desc">
          ResourceHub is an open-source platform for the modern world to discover, collect, and share valuable resources.
        </p>
        <Feed/>
      </section>
  );
}
