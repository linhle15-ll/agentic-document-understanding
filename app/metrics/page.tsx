import Image from "next/image";
import originalDoc from "@/public/originalDoc.webp";
import parsedDoc from "@/public/parsedDoc.webp";
import { title } from "@/components/primitives";

export default function ProductMetrics() {
    return (
        <section className="mt-20 flex flex-col items-center text-center w-full">
        <div className={title({ color: "violet" })}>
            10M+ documents parsed per week 
        </div>
        <div className="flex flex-row gap-20 justify-center mt-8"> 
            <div className="flex flex-col gap-5">
                <div className={title({ size: "sm" })}>Original Document</div>
                <Image src={originalDoc} alt="Original Document" width={400} height={300} className="rounded-lg" />

            </div>

            <div className="flex flex-col gap-5">
                <div className={title({ color: "cyan", size: "sm" })}>Parsed Result</div>
                <Image src={parsedDoc} alt="Parsed Document" width={400} height={300} className="rounded-lg" />
            </div>
        </div>
        </section>
    );
}