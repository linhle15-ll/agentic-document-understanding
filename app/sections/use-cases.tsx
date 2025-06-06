'use client';
import { title } from "@/components/primitives";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import HorizontalScrollCarousel from "@/components/scroll-carousel";
import { Landmark, ScrollText, ChartNoAxesCombined, Blocks, ShieldCheck } from 'lucide-react';
import financeDoc from "@/public/use-cases/finance-doc.jpg";
import scienceDoc from "@/public/use-cases/science-doc.png";
import consultDoc from "@/public/use-cases/consult-doc.jpg";
import manufactureDoc from "@/public/use-cases/manufacture-doc.png";
import insuranceDoc from "@/public/use-cases/insurance-doc.jpg";

const useCases = [
    {
        icon: <Landmark size={40} />,
        cardTitle: "Financial Services",
        description: "Handle numeric data in large complex tables with accuracy, handle visually complex layouts in slides, financial statements and reports",
        imgSrc: financeDoc
    },
    {
        icon: <ScrollText size={40} />,
        cardTitle: "Scientific Paper",
        description: "Handle complex layouts, mathematical equations and chemical formulas, document structure",
        imgSrc: scienceDoc
    },
    {
        icon: <ChartNoAxesCombined size={40} />,
        cardTitle: "Professional Services and Consulting",
        description: "Handle varying layout structures on slides, client reports in different document standards, project proposals etc.",
        imgSrc: consultDoc
    },
    {
        icon: <Blocks size={40} />,
        cardTitle: "Manufacturing and Operations",
        description: "Transform multimodal technical docs (product manuals, operation guides) featuring flow diagrams and technical drawings into actionable data with ease.",
        imgSrc: manufactureDoc
    },
    {
        icon: <ShieldCheck size={40} />,
        cardTitle: "Insurance",
        description: "Handle complex tables, handwritten claim forms, invoices with accuracy.",
        imgSrc: insuranceDoc
    },
]

export default function ProductUseCases() {
    return (
        <section className="bg-neutral-900 mt-20 flex flex-col items-center text-center w-full">
            <div className={title({ color: "violet" })}>
                <div className="max-w-7xl w-full mt-20"> Transforming Use Cases Across Sectors </div>
            </div>
            <div className="flex gap-3 justify-center mt-8"> 
                <Link
                    isExternal
                    className={buttonStyles({
                        color: "primary",
                        radius: "full",
                        variant: "shadow",
                    })}
                    href="/settings"
                >
                    Get started
                </Link>
            </div>
            <div>
                <HorizontalScrollCarousel cards={useCases} />
            </div>
            
        </section>
    );
}