interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  billedPeriod: string;
  buttonText: string;
}

export default function PricingCard({
  title,
  description,
  features,
  price,
  billedPeriod,
  buttonText,
}: PricingCardProps) {
  return (
    <div className="h-full rounded-xl bg-[#faf9f6] border-2 border-black hover:border-[3px] p-5 hover:p-[19px] hover:scale-[1.02] transition-all duration-200 ease-in-out">
      <div className="flex flex-col items-start gap-7.5 justify-between h-full">
        <div className="space-y-7.5">
          <div className="space-y-2.5">
            <h2 className="text-4xl font-black tracking-wide stroke-1-5 stroke-black text-transparent">
              {title}
            </h2>
            <p className="text-lg">{description}</p>
          </div>

          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                </div>
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full space-y-5">
          <div className="self-center flex flex-col items-center gap-1.5">
            <p className="font-bold text-2xl">{price}</p>
            <p>{billedPeriod}</p>
          </div>

          <button className="text-xl font-bold whitespace-nowrap cursor-pointer text-center text-white bg-[#0F0F0F] w-full px-5 h-[55px] flex items-center justify-center rounded-xl scale-100 hover:scale-[1.02] active:scale-[0.99] button-transition">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
