import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-start w-full mx-5 md:w-2xl xl:w-4xl">
        <h1 className="section-title">About</h1>

        <p className="text-xl mt-5 mb-10">
          Most loyalty programs are slow, generic, confusing, and hard to
          manage. Rewards often take too long to earn, feel irrelevant or low in
          value, and come with unclear rules.
          <br />
          <br />
          Without the right tech or resources, brands struggle to personalize
          experiences. Ready to fix loyalty for your business?
        </p>

        <div className="flex items-center gap-6">
          <img
            src="Hans-Christian-Angel.jpeg"
            alt=""
            className="rounded-full size-16"
          />
          <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-5">
            <p className="font-medium text-xl">Hans Christian Angel</p>
            <p className="font-light text-lg sm:text-xl">
              Head of Customer Success
            </p>
          </div>
        </div>

        <Link
          href="#"
          className="font-bold mt-10 sm:whitespace-nowrap text-white bg-[#0F0F0F] px-10 max-sm:py-2.5 sm:h-[55px] flex items-center text-center justify-center rounded-xl scale-100 hover:scale-105 active:scale-95 button-transition"
        >
          SCHEDULE LOYALTY STRATEGY SESSION
        </Link>

        <div className="flex flex-col self-center xl:flex-row max-xl:gap-13 gap-10 mt-13">
          <div className="space-y-5">
            <h2 className="text-center text-3xl font-bold">1. Define</h2>
            <p className="text-center">
              We start by understanding your brand and your goals. Together, we
              pinpoint what customer loyalty means for your business—whether
              it’s driving repeat visits, rewarding regulars, or building
              lasting relationships.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-center text-3xl font-bold">2. Design</h2>
            <p className="text-center">
              Next, we craft a digital loyalty program tailored to your
              audience. From card visuals to reward structures, everything is
              built to fit seamlessly with your brand and delight your
              customers.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-center text-3xl font-bold">3. Deploy</h2>
            <p className="text-center">
              Once everything’s ready, we launch your loyalty program across
              channels—fast and hassle-free. You’ll be up and running with smart
              tracking, customer insights, and all the tools to grow loyalty
              from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
