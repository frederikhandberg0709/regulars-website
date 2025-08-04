interface CasesCardProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  type: string;
}

export default function CasesCard({
  imageSrc,
  alt,
  title,
  description,
  type,
}: CasesCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-10 md:items-stretch">
      <div className="w-full md:w-1/2 h-[500px] md:h-[300px]">
        <img
          src={imageSrc}
          alt={alt}
          className="rounded-xl h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col max-md:gap-7 items-start md:justify-between md:py-6 md:h-[300px] md:w-1/2">
        <div className="space-y-3">
          <h2 className="font-medium text-3xl uppercase">{title}</h2>
          <p>{description}</p>
        </div>

        <div className="font-bold rounded-full px-5 py-3 bg-white border border-[#0f0f0f]">
          {type}
        </div>
      </div>
    </div>
  );
}
