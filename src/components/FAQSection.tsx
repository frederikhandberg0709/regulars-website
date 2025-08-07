import FAQItem from "./faq-item";

export default function FAQSection() {
  return (
    <section className="flex flex-col justify-center">
      <div className="flex flex-col space-y-5 items-start self-center mx-5 md:w-2xl xl:w-4xl">
        <h1 className="section-title">FAQ</h1>

        <div className="w-full space-y-7.5">
          <FAQItem title="How does Regular help get more loyal customers?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            repellat eius voluptatum quam voluptatibus, provident accusantium
            asperiores fuga reprehenderit, unde optio voluptatem aliquam eaque
            nam esse tempore enim vero expedita.
          </FAQItem>

          <FAQItem title="What is the difference between Regular and other loyalty programs?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            labore officia architecto quae ratione optio! Earum consequuntur
            cupiditate quisquam placeat error laudantium ab recusandae
            exercitationem, cumque perspiciatis quae quaerat delectus asperiores
            aspernatur amet consequatur iusto provident mollitia! Repellendus
            nemo quam tempora eum earum suscipit voluptatem asperiores modi vel!
            Laudantium modi enim excepturi ea! Sed alias ipsa quae natus
            deserunt.
          </FAQItem>

          <FAQItem title="What does Regular cost?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            repellendus eaque eligendi, recusandae possimus deserunt! Corrupti,
            culpa tenetur. Magnam ipsa recusandae maxime perspiciatis ea.
            Placeat incidunt harum et explicabo deserunt tempora esse delectus
            ratione veniam?
          </FAQItem>
        </div>
      </div>
    </section>
  );
}
