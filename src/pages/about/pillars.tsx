import Title from "./title";

export default function Pillars() {
  const boxStyle =
    "bg-linear-to-tr from-white/10 to-black border border-white/45 rounded-xl flex items-center justify-center p-6";

  return (
    <div className="py-18">
      <Title title="Pillars of IntelliSeven Inc." />
      <p className="text-center">
        Streamlining work processes with our technology. Accelerating business
        success with next-gen IT.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mt-18 mx-auto">
        {/* 1 */}
        <div className={boxStyle}>
          <h2 className="text-white text-center text-xl font-semibold">
            Empower Businesses
            <br />
            with Smart Tech
          </h2>
        </div>

        {/* 2 (Large wide image) */}
        <div className="col-span-1 md:col-span-2 md:row-span-1 rounded-xl overflow-hidden">
          <img
            src="/img/about/pillar1.png"
            className="w-full object-cover"
            alt=""
          />
        </div>

        {/* 3 */}
        <div className="rounded-xl row-span-2 overflow-hidden">
          <img
            src="/img/about/pillar3.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* 4 */}
        <div className={boxStyle}>
          <h2 className="text-white text-center text-xl font-semibold">
            Optimize Workflow
            <br />
            Operations
          </h2>
        </div>

        {/* 5 */}
        <div className="rounded-xl overflow-hidden">
          <img
            src="/img/about/pillar2.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* 6 */}
        <div className={boxStyle}>
          <h2 className="text-white text-center text-xl font-semibold">
            Champion Digital
            <br />
            Change
          </h2>
        </div>
      </div>
    </div>
  );
}
