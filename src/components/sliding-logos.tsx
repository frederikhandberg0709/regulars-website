import { useEffect } from "react";

export default function SlidingLogos({
  logos,
}: {
  logos: { src: string; alt: string; invert: boolean }[];
}) {
  useEffect(() => {
    const sliders = document.querySelectorAll<HTMLElement>(
      ".trusted-brands-logos-slider"
    );

    sliders.forEach((slider) => {
      const containers = slider.querySelector<HTMLElement>(".logo-container");
      if (!containers) return;

      requestAnimationFrame(() => {
        const containerWidth = containers.offsetWidth;
        if (containerWidth === 0) {
          console.warn("Logo container width is 0, skipping animation init");
          return;
        }

        const duration = containerWidth / 40;

        slider.style.setProperty("--slider-width", `${containerWidth}px`);
        slider.style.setProperty("--slider-duration", `${duration}s`);
      });
    });
  }, [logos]);

  return (
    <div className="trusted-brands-logos mt-5 w-full md:w-2xl xl:w-4xl self-center">
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
  );
}
