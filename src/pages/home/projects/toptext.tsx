import AboutBg from "@/assets/img/aboutbg.png";

export default function TopText() {
  return (
    <div
      className="text-justify flex flex-col items-center justify-center gap-2 bg-cover bg-bottom border border-neutral-900 p-7 lg:px-28 lg:h-[400px] rounded-xl"
      style={{ backgroundImage: `url(${AboutBg})` }}
    >
      <div className="whitespace-nowrap text-yellow-300 border border-white/60 px-5 py-1 lg:mb-10 rounded-full">
        Project Showcase
      </div>
      <p className="lg:text-3xl text-center font-medium">
        Browse through the range of products Intelliseven engineers have
        developed to date and explore what our technology can do.
      </p>
    </div>
  );
}
