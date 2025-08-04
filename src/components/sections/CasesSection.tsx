import CasesCard from "../cases-card";

export default function CasesSection() {
  const logos = [
    { src: "/grappa-logo.png", alt: "Grappa Logo", invert: false },
    { src: "/helmut-logo.png", alt: "Helmut Logo", invert: false },
    { src: "/dagh-logo.png", alt: "Dagh Logo", invert: false },
    { src: "/baghuset-logo.png", alt: "Baghuset Logo", invert: false },
    { src: "/piccolo-logo.png", alt: "Piccolo Logo", invert: false },
    {
      src: "/bistro-le-bleu-logo.png",
      alt: "Bistro Le Bleu Logo",
      invert: false,
    },
    { src: "/zalt-logo.png", alt: "Zalt Logo", invert: false },
    { src: "/nogen-logo.png", alt: "Nogen Logo", invert: false },
    { src: "/lundbergs-logo.png", alt: "Lundbergs Logo", invert: true },
    { src: "/como-kbh-logo.png", alt: "Como KBH Logo", invert: false },
  ];

  return (
    <section className="flex flex-col justify-center">
      <div className="flex flex-col items-start self-center mx-5 md:w-2xl xl:w-4xl">
        <h1 className="section-title">Cases</h1>
        <div className="flex flex-col gap-14 md:gap-10 mt-10">
          <CasesCard
            imageSrc="/jakobsen-and-co.jpg"
            alt="Jakobsen & Co"
            title="JAKOBSEN & CO"
            description="Case description goes here."
            type="CASHBACK"
          />

          <CasesCard
            imageSrc="/martin-ib.jpg"
            alt="Martin Ibsen"
            title="MARTIN IBSEN"
            description="Case description goes here."
            type="STAMPS"
          />

          <CasesCard
            imageSrc="/the-burger-concept.jpeg"
            alt="The Burger Concept"
            title="THE BURGER CONCEPT"
            description="Case description goes here."
            type="SUBSCRIPTION"
          />
        </div>

        <div className="mt-20">
          <p className="font-bold">Trusted By Leading Restaurants</p>
        </div>
      </div>

      <div className="trusted-brands-logos mt-5">
        <div className="trusted-brands-logos-slider">
          <div className="logo-container">
            {logos.map((logo, index) => (
              <img
                key={`first-${index}`}
                src={logo.src}
                alt={logo.alt}
                className={`w-auto h-full ${logo.invert ? "invert" : ""}`}
              />
            ))}
          </div>

          <div className="logo-container">
            {logos.map((logo, index) => (
              <img
                key={`second-${index}`}
                src={logo.src}
                alt={logo.alt}
                className={`w-auto h-full ${logo.invert ? "invert" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
