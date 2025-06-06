import { title } from "@/components/primitives";

export default function ProductIndustryHighlights() {
    return (
        <section className="flex flex-col items-center text-center mt-8 w-full">
            <div className={title({ color: "fptBlue" })}> Industry Highlights </div>
            <div className="mt-4 flex-wrap max-w-2xl">
                Our solutions are tailored to meet the unique needs of various industries, ensuring that you get the most relevant and effective tools for your business.
            </div>
        </section>
    );
        
}