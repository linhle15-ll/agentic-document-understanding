import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { title } from "@/components/primitives"

// Card type and component from card.tsx
type CardProps = {
  icon: ReactNode;
  cardTitle: string;
  description: string;
  imgSrc: StaticImageData | string;
};

function Card({ icon, cardTitle, description, imgSrc }: CardProps) {
  return (
    <div className="group relative block bg-black h-[450px] w-[450px] overflow-hidden rounded-xl">
      <Image
        alt="illustration use case"
        src={imgSrc}
        fill
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        style={{ objectFit: "cover" }}
      />
      <div className="relative p-4 sm:p-6 lg:p-8 z-10 h-full flex flex-col justify-between">
        <span className="text-white text-2xl font-bold mb-4">
          {icon}
        </span>
        <div className={`${title({ size: "sm" })} text-white`}>{cardTitle}</div>
        <div className="mt-8">
          <div
            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p className="text-md text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HorizontalScrollCarousel ({ cards } : { cards: CardProps[] }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900 mt-0 w-screen overflow-hidden">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden w-screen">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// export default function CardScrollExample() {
//   return (
//     <div className="bg-neutral-800">
//       <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll down
//         </span>
//       </div>
//       <HorizontalScrollCarousel  />

//       <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll up
//         </span>
//       </div>
//     </div>
//   );
// }