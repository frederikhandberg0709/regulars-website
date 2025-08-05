interface TestimonialsCardProps {
  imageSrc: string;
  name: string;
  testimonial: string;
  invert?: boolean;
}

export default function TestimonialsCard({
  imageSrc,
  name,
  testimonial,
  invert = false,
}: TestimonialsCardProps) {
  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="flex items-center gap-3">
        <img
          src={imageSrc}
          alt={name}
          className={`size-12 ${invert ? "invert" : ""}`}
        />
        <h2 className="font-bold text-xl">{name}</h2>
      </div>
      <p>{testimonial}</p>
    </div>
  );
}
