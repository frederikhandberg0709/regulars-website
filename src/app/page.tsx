"use client";

import Link from "next/link";
import AboutSection from "../components/sections/AboutSection";
import CasesSection from "@/components/sections/CasesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FooterSection from "@/components/sections/FooterSection";
import SlidingLogos from "@/components/sliding-logos";
import FAQSection from "@/components/FAQSection";

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
      <nav className="flex items-center justify-center bg-white w-full z-50">
        <div className="flex flex-col items-center mx-10 w-full lg:w-4xl">
          <div className="flex items-center justify-between h-14 w-full my-7">
            <button className="cursor-pointer scale-100 hover:scale-105 w-[144px] h-auto active:scale-95 transition duration-200">
              <img src="/regulars-logo.png" alt="Regulars Logo" />
            </button>

            <div className="md:flex items-center gap-7 hidden">
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
                className="font-bold whitespace-nowrap text-center text-white bg-[#0F0F0F] px-5 h-[45px] flex items-center justify-center rounded-xl scale-100 hover:scale-105 active:scale-95 button-transition"
              >
                BOOK A DEMO
              </Link>
            </div>

            {/* Mobile menu */}
            <button className="md:hidden flex items-center justify-center p-2 size-10 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 14"
                fill="none"
              >
                <rect y="6" width="16" height="2" fill="#0F0F0F" />
                <rect width="16" height="2" fill="#0F0F0F" />
                <rect y="12" width="16" height="2" fill="#0F0F0F" />
              </svg>
            </button>
          </div>
          <div className="mx-auto bg-[#0F0F0F] h-[1px] w-full"></div>
        </div>
      </nav>

      <header className="mt-20">
        <div className="flex flex-col justify-center">
          <div className="mx-5 md:w-2xl xl:w-4xl self-center">
            <div className="flex flex-col xl:flex-row items-center justify-center gap-14">
              <div className="flex flex-col gap-6 w-full xl:w-1/2">
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

                <div className="flex flex-col sm:flex-row gap-5">
                  <Link
                    href="#"
                    className="font-bold text-center whitespace-nowrap text-white bg-[#0F0F0F] scale-100 hover:scale-105 active:scale-95 px-5 h-[45px] button-transition flex items-center justify-center rounded-full"
                  >
                    BOOK A DEMO
                  </Link>
                  <Link
                    href="#"
                    className="font-bold text-center whitespace-nowrap border-2 scale-100 hover:scale-105 active:scale-95 button-transition hover:bg-[#0F0F0F] hover:text-white border-[#0F0F0F] px-5 h-[45px] flex items-center justify-center rounded-full"
                  >
                    LEARN MORE
                  </Link>
                </div>

                <div className="flex items-center gap-3 mt-5">
                  <div className="flex -space-x-3">
                    <div className="relative rounded-full z-30 size-10 aspect-square bg-gray-500 border-2 border-[#faf9f6] overflow-hidden">
                      {/* <img src="/" alt="Customer 1" className="object-cover w-full h-full" /> */}
                    </div>
                    <div className="relative rounded-full z-20 size-10 aspect-square bg-gray-500 border-2 border-[#faf9f6] overflow-hidden">
                      {/* <img src="/" alt="Customer 1" className="object-cover w-full h-full" /> */}
                    </div>
                    <div className="relative rounded-full z-10 size-10 aspect-square bg-gray-500 border-2 border-[#faf9f6] overflow-hidden">
                      {/* <img src="/" alt="Customer 1" className="object-cover w-full h-full" /> */}
                    </div>
                  </div>
                  <p>Loved by more than 100.000 regulars</p>
                </div>
              </div>

              <div className="w-full flex justify-center xl:justify-end xl:w-1/2">
                <img
                  src="/header-phone.png"
                  alt="Mobile phone"
                  className="w-[350px]"
                />
              </div>
            </div>

            <p className="font-bold mt-20">Trusted By Leading Cafés</p>
          </div>
          <SlidingLogos logos={logos} />
        </div>
      </header>

      <div className="px-5">
        <div className="mx-auto md:w-2xl xl:w-4xl bg-[#0F0F0F] h-[1px] my-13"></div>
      </div>

      <AboutSection />

      <div className="px-5">
        <div className="mx-auto md:w-2xl xl:w-4xl bg-[#0F0F0F] h-[1px] my-13"></div>
      </div>

      <CasesSection />

      <div className="px-5">
        <div className="mx-auto md:w-2xl xl:w-4xl bg-[#0F0F0F] h-[1px] my-13"></div>
      </div>

      <TestimonialsSection />

      <div className="px-5">
        <div className="mx-auto md:w-2xl xl:w-4xl bg-[#0F0F0F] h-[1px] my-13"></div>
      </div>

      <FAQSection />

      <div className="px-5">
        <div className="mx-auto md:w-2xl xl:w-4xl bg-[#0F0F0F] h-[1px] my-13"></div>
      </div>

      <FooterSection />
    </>
  );
}
