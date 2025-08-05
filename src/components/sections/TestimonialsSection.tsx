import TestimonialsCard from "../testimonials-card";

export default function TestimonialsSection() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-start w-4xl mx-5 md:w-2xl xl:w-4xl">
        <h1 className="section-title">Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10">
          <TestimonialsCard
            imageSrc="/smagloes-logo.png"
            invert
            name="Cafe Smagløs"
            testimonial="“Our team and guests feel more connected, and the results speak for themselves. Personalized campaigns have transformed how we engage with our regulars.“"
          />

          <TestimonialsCard
            imageSrc="/april-logo.png"
            name="April"
            testimonial="“Our community is committed to specialty coffee. Regulars makes it easy to connect with passionate guests and deepen their engagement.“"
          />

          <TestimonialsCard
            imageSrc="/martin-ib-logo.png"
            invert
            name="Martin Ib"
            testimonial="“Our Club provides insights across locations, rewards loyal guests, and lets us send quick, personalized offers that drive engagement.“"
          />

          <TestimonialsCard
            imageSrc="/rare-burgery-logo.png"
            name="Rare Burgery"
            testimonial="“Our members value the exclusive experience and love seeing their cashback grow. Regulars makes loyalty simple and keeps our community strong.“"
          />
        </div>
      </div>
    </section>
  );
}
