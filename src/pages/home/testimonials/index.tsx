import Cards from "./cards";

export default function Testimonials() {
  return (
    <section className="w-full py-18">
      <div className="max-w-11/12 lg:max-w-8xl mx-auto">
        <div className="text-center mb-18">
          <h1 className="text-red-500 text-xl lg:text-4xl font-bold">
            Client Spotlight
          </h1>
          <span>
            Explore real stories from our clients and uncover the wonders of how
            Intelliseven Inc. transformed their businesses.{" "}
          </span>
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </section>
  );
}
