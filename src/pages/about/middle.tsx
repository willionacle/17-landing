import Title from "./title";

export default function Middle() {
  return (
    <div className="my-18">
      <Title title="Message from the CEO" />
      <div className="flex flex-col lg:gap-5 lg:flex-row lg:justify-center lg:mx-auto items-center lg:max-w-10/12 lg:mt-20">
        <div className="my-6 lg:my-0 lg:w-1/2">
          <img src="/img/about/gally.png" />
        </div>
        <div className="text-justify lg:w-1/2">
          <p>
            In today’s rapidly evolving digital world, businesses need
            technology partners they can depend on, partners who acknowledge
            their challenges, foresee their needs, and deliver quality solutions
            that lead to a satisfactory outcome. At IntelliSeven Inc., we hold
            onto these standards to better serve our clients every day.
          </p>
          <br />
          <p>
            Our company develops top-notch software systems across various
            industries, which have been proven efficient by clients who continue
            to show support and avail our services. From web to mobile
            application development, we ensure that the technical expertise of
            our engineers is applied to solving the conflicts our clients are
            experiencing.
          </p>
          <br />
          <p>
            Together, we are optimistic that our solutions can help address your
            needs and be one step closer to your goals. Our team values your
            trust, and through your support, we can create a dynamic workspace
            tailored for your business
          </p>
          <br />
          <p>
            Thank you for your interest in IntelliSeven Technology Solutions
            Inc. We look forward to being your trusted business partner in IT.
          </p>
          <br />
          <div>
            <p className="font-bold">Atty. Galeleo P. Angeles</p>
            <p className="italic">CEO/President</p>
          </div>
        </div>
      </div>
    </div>
  );
}
