import Cards from "./cards";

export default function Industries() {
  return (
    <section className="py-18">
      <div className="max-w-11/12 lg:max-w-8xl mx-auto border p-5 lg:p-7 lg:pt-10 lg:px-7 rounded-lg">
        <h1 className="font-semibold text-xl lg:text-4xl text-center lg:text-left mb-2">
          <span className="font-[Playfair_Display]">Industries</span>{" "}
          <span className="italic text-red-500">We Empower</span>
        </h1>
        <span className="text-justify block w-full mb-4">
          We are committed to delivering tailored digital solutions across all
          areas of business.
        </span>
        <div className="w-full h-fit bg-linear-to-br from-red-500 via-red-950/20 to-red-500 rounded-lg p-0.5">
          <div className="bg-black rounded-lg p-3 overflow-hidden">
            <Cards />
          </div>
        </div>
      </div>
    </section>
  );
}
