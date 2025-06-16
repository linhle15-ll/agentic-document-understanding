import Image from "next/image";
import originalDoc from "@/public/commons/originalDoc.webp";
import parsedDoc from "@/public/commons/parsedDoc.webp";
import { subtitle } from "@/components/primitives";

export default function ProductMetrics() {
    return (
        <section className="mt-20 flex flex-col md:flex-row items-center justify-center text-center gap-10 md:gap-20 w-full px-4">
            <div className="flex flex-col gap-5 w-full max-w-md">
                <div className={subtitle({ size: "md", class:"text-gray-900 font-semibold mb-4 leading-tight lg:leading-snug" })}>Original Document</div>
                <div className="rounded-lg shadow-lg bg-white p-2 flex items-center justify-center">
                    <Image
                        src={originalDoc}
                        alt="Original Document"
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto object-contain"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-5 w-full max-w-md">
                <div className={subtitle({ size: "md", class:"text-gray-900 font-semibold" })}>Parsed Result</div>
                <div className="rounded-lg shadow-lg bg-white p-2 flex items-center justify-center">
                    <Image
                        src={parsedDoc}
                        alt="Parsed Document"
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
}