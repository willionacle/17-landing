import AboutIcon from "@/assets/img/about/abouticon.png";
import AboutAsset from "@/assets/img/about/aboutasset1.png";

export default function Top() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-5 lg:justify-between">
      <div className="flex flex-col lg:items-start gap-3 lg:gap-5 lg:w-1/2">
        <div className="border flex items-center gap-2 w-fit mx-auto lg:mx-0 rounded-full text-yellow-300 py-2 px-5 lg:mb-7">
          <img
            src={AboutIcon}
            alt="About IntelliSeven icon"
            className="w-7 h-7"
          />
          <span>About IntelliSeven Inc.</span>
        </div>

        <h1 className="font-semibold text-2xl lg:text-5xl text-center lg:text-left lg:mb-7">
          Your trusted business partner for cutting-edge technology innovation.
        </h1>

        <p className="text-justify">
          Our company began with a progressive vision of leveraging technology
          as a catalyst to elevate business operations to thrive in the digital
          age. Our team is dedicated to expanding the reach of IntelliSeven and
          empowering more businesses across various sectors with the expertise
          of our homegrown, experienced engineers. United in innovation, we push
          boundaries and empower the future with modern IT solutions.
        </p>

        <p className="text-justify">
          Registered with the Securities and Exchange Commission under
          Philippine law, IntelliSeven Inc. offers high-quality IT services that
          adhere to full legal compliance. The company operates fully from two
          offices: Penthouse, West City Plaza, 66 West Ave, Quezon City, 1104
          Metro Manila, and Unit 9A, 9th Floor, IBM Plaza, 8 Eastwood Ave,
          Quezon City, 1110 Metro Manila.
        </p>
      </div>

      <div className="flex justify-center lg:justify-end">
        <img
          src={AboutAsset}
          alt="IntelliSeven office and team"
          className="max-w-full h-auto rounded-xl"
          loading="lazy"
        />
      </div>
    </div>
  );
}
