import PricingCard from "../pricing-card";

export default function PricingSection() {
  return (
    <section className="flex justify-center">
      <div className="w-4xl mx-5 md:w-2xl xl:w-4xl">
        <h1 className="section-title">Pricing</h1>

        <div className="flex max-md:flex-col gap-7.5 max-[896px]:gap-10 my-5">
          <div className="md:flex-1/2">
            <PricingCard
              title="Brand"
              description="Ideal for small businesses looking to kickstart their loyalty program."
              features={[
                "Personal Memberships",
                "Cashback Rewards",
                "Advanced Technology Integration",
                "Customer Engagement Tools",
                "Exclusive Experiences",
              ]}
              price="DKK 80/month"
              billedPeriod="Billed Yearly"
              buttonText="BOOK A DEMO"
            />
          </div>

          <div className="md:flex-1/2">
            <PricingCard
              title="Enterprise"
              description="Perfect for established brands wanting advanced loyalty features and deep customer insights."
              features={[
                "Personal Memberships",
                "Cashback Rewards",
                "Advanced Technology Integration",
                "Customer Engagement Tools",
                "Exclusive Experiences",
              ]}
              price="Custom"
              billedPeriod="Billed Yearly"
              buttonText="BOOK A DEMO"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
