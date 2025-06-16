import Image, { StaticImageData } from "next/image";
import { title } from "@/components/primitives";
import { CardProps } from "@/types/index";
import PlaceholderImg from '@/public/commons/placeholder-image.jpg'

function Card({ icon, name, description, illustration }: CardProps) {
  return (
    <div className="group relative block bg-black h-[400px] w-[350px] overflow-hidden rounded-xl shrink-0 transition-transform duration-500 hover:scale-[1.02]">
      <Image
        alt="illustration use case"
        src={illustration ?? PlaceholderImg}
        fill
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-all duration-500 group-hover:scale-110 group-hover:opacity-50"
        style={{ objectFit: "cover" }}
      />
      <div className="relative p-6 sm:p-8 lg:p-10 z-10 h-full flex flex-col justify-between bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <span className="text-white text-2xl font-bold mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-primary">
          {icon}
        </span>
        <div className="flex flex-col align-middle justify-center ">
          <div className={title({ 
                size: "sm", 
                class: "text-white text-base mt-6 transform transition-transform duration-500 group-hover:-translate-y-2 leading-tight lg:leading-snug" 
                })} 
                style={{ minHeight: 40 }} >
                  {name}
                </div>
          <div
            className="transform transition-all duration-500 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            style={{ minHeight: 48 }} // adjust as needed
          >
            <p className="text-md text-gray-200">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HorizontalScrollCarousel({ cards }: { cards: CardProps[] }) {
  return (
    <div className="relative w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
      <div className="flex gap-8 py-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-max">
        {cards.map((card, index) => (
          <div key={index} className="snap-center shrink-0 first:pl-8 last:pr-8">
            <Card {...card} />
          </div>
        ))}
      </div>
      {/* <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent pointer-events-none"></div> */}
    </div>
  );
}