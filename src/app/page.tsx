"use client";

import Link from "next/link";

export default function Home() {
  const logos = [
    { src: "/april-coffee-logo.png", alt: "April Coffee Logo", invert: true },
    {
      src: "/kontra-coffee-logo.png",
      alt: "Kontra Coffee Logo",
      invert: false,
    },
    { src: "/manda-logo.png", alt: "Manda Logo", invert: true },
    { src: "/orsa-logo.png", alt: "ORSA Logo", invert: false },
    { src: "/carter-logo.png", alt: "CARTER Logo", invert: false },
    { src: "/sp-coffee-logo.png", alt: "SP Coffee Logo", invert: false },
    { src: "/sidewalk-logo.png", alt: "Sidewalk Logo", invert: false },
    {
      src: "/lige-om-hjoernet-logo.png",
      alt: "Lige om Hjørnet Logo",
      invert: false,
    },
    { src: "/ziggy-logo.png", alt: "Ziggy Logo", invert: false },
    { src: "/echo-logo.png", alt: "Echo Logo", invert: true },
  ];

  return (
    <>
      <nav className="flex items-center justify-center bg-white w-full">
        <div className="flex items-center justify-between w-4xl mt-7">
          <button className="cursor-pointer scale-100 hover:scale-105 w-[144px] h-auto active:scale-95 transition duration-200">
            <img src="/regulars-logo.png" alt="Regulars Logo" />
          </button>

          <div className="flex items-center gap-7">
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/cases" className="nav-link">
              Cases
            </Link>
            <Link href="/pricing" className="nav-link">
              Pricing
            </Link>
            <Link href="/FAQ" className="nav-link">
              FAQ
            </Link>

            <Link
              href="#"
              className="font-bold text-white bg-[#0F0F0F] px-5 h-[45px] flex items-center justify-center rounded-xl scale-100 hover:scale-105 active:scale-95 button-transition"
            >
              BOOK A DEMO
            </Link>
          </div>
        </div>
      </nav>
      <header>
        <div className="flex flex-col justify-center">
          <div className="w-3xl self-center">
            <div className="flex">
              <div className="flex flex-col gap-6">
                <h1 className="font-black text-5xl leading-tight">
                  More members.
                  <br />
                  More visits.
                  <br />
                  More revenue.
                </h1>

                <p>
                  Turn one-time visitors into regulars with personal memberships
                  in Apple & Google Wallet.
                </p>

                <div className="flex gap-3">
                  <Link
                    href="#"
                    className="font-bold text-white bg-[#0F0F0F] scale-100 hover:scale-105 active:scale-95 px-5 h-[45px] button-transition flex items-center justify-center rounded-full"
                  >
                    BOOK A DEMO
                  </Link>
                  <Link
                    href="#"
                    className="font-bold border-2 scale-100 hover:scale-105 active:scale-95 button-transition hover:bg-[#0F0F0F] hover:text-white border-[#0F0F0F] px-5 h-[45px] flex items-center justify-center rounded-full"
                  >
                    LEARN MORE
                  </Link>
                </div>

                <div>
                  <p>Loved by more than 100.000 regulars</p>
                </div>
              </div>

              <img
                src="/header-phone.png"
                alt="Mobile phone"
                className="w-[322px]"
              />
            </div>

            <p className="font-bold mt-20">Trusted By Leading Cafés</p>
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
        </div>
      </header>
    </>
  );
}
