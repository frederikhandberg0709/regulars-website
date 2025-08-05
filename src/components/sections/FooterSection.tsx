import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="flex justify-center">
      <div className="flex flex-col items-center gap-10 w-full mx-5 md:w-2xl xl:w-4xl mb-3.5 sm:mb-5">
        <div className="flex flex-col gap-5 self-start sm:self-center sm:flex-row sm:items-center sm:gap-10">
          <img
            src="/regulars-logo.png"
            alt="Regulars Logo"
            className="w-32 h-auto"
          />
          <img src="/eu.png" alt="EU Flag" className="w-36 h-auto" />
        </div>

        <div className="flex gap-14">
          <div className="flex flex-col gap-2.5 items-center">
            <h3 className="text-lg font-bold">Company</h3>
            <Link
              href="#"
              className="font-medium sm:opacity-70 sm:hover:opacity-100 transition"
            >
              Branding
            </Link>
            <Link
              href="#"
              className="font-medium sm:opacity-70 sm:hover:opacity-100 transition"
            >
              Careers
            </Link>
            <Link
              href="#"
              className="font-medium sm:opacity-70 sm:hover:opacity-100 transition"
            >
              Roadmap
            </Link>
          </div>
          <div className="flex flex-col gap-2.5 items-center">
            <h3 className="text-lg font-bold">Socials</h3>
            <Link
              href="#"
              className="flex items-center gap-2 font-medium sm:opacity-70 sm:hover:opacity-100 transition"
            >
              <img
                src="/instagram-icon.png"
                alt="Instagram"
                className="invert"
              />{" "}
              Instagram
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 font-medium sm:opacity-70 sm:hover:opacity-100 transition"
            >
              <img src="/linkedin-icon.png" alt="LinkedIn" className="invert" />{" "}
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <Link
            href="#"
            className="font-medium sm:opacity-70 sm:hover:opacity-100 transition"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="font-medium sm:opacity-70 sm:hover:opacity-100 transition"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="font-medium sm:opacity-70 sm:hover:opacity-100 transition"
          >
            Cookies
          </Link>
          <p className="mt-7.5">© 2025 Regulars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
