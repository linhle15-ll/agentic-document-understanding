import { title, subtitle } from '@/components/primitives';
import Image from 'next/image';
import Parse from '@/public/features/Parse.svg'
import Enrichment from '@/public/features/Enrichment.svg'
import CLS from '@/public/features/CLS.svg'
import Security from '@/public/features/Security.svg'
import { CardProps } from '@/types/index';

function FlipCard({ name, description, illustration }: CardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center h-80 min-h-[320px] transition-all duration-300">
      {/* Image + Title (default) */}
      <div className="flex flex-col items-center justify-center w-full h-full transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
        <Image
            src={illustration}
            alt={name}
            className="w-30 h-30 mb-4"
        />
    
        <h3 className="text-xl font-semibold text-center">{name}</h3>
      </div>
      {/* Title + Description (on hover) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
        <div className="text-2xl font-bold mb-6 text-center text-darkBlue">{name}</div>
        <div className="text-center text-base">{description}</div>
      </div>
    </div>
  );
}

const features = [
    {
        name: "Parsing",
        descriptions: "Breaks down raw documents into structured, meaningful segments—making it easier to analyze, process, and utilize in various applications.",
        icon: Parse,
    },
    {
        name: "Enrichment",
        descriptions: "Adds contextual metadata or inferred info to enhances understanding and discoverability without modifying the original text, making data more accessible for downstream applications.",
        icon: Enrichment,
    },
    {
        name: "Structured Schema Extraction & Classification",
        descriptions: "Identifies and labels key data points—such as name, amount, and date—within documents. Classifies documents into predefined or dynamic categories, streamlining organization and enabling efficient data retrieval.",
        icon: CLS,
    },
    {
        name: "Enterprise Security",
        descriptions: "From Zero-data retention to GDPR ( General Data Protection Regulation) — ensuring privacy, compliance, and enterprise-grade data protection.",
        icon: Security,
    }
]
export default function ProductFeatures() {
    return (
        <section className="flex flex-col gap-5 items-center align-middle w-full mt-20">
            <div className={title({ class: "max-w-3xl w-full text-center" })}>
                <div className={title({size:"md", class: "text-darkBlue"})}> Agentic Document Extraction Features </div>
            </div>
            {/* Features Cards */}
            <div className={subtitle({ class: "mt-4 text-center max-w-3xl mx-auto" })}>
                Agentic Document Extraction offers comprehensive analysis from layout recognition to advanced image interpretation, ensuring you capture every crucial detail for enhanced decision-making and streamlined workflows.
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                    {features.map((feature, index) => (
                        <FlipCard
                            key={index}
                            icon={feature.icon}
                            name={feature.name}
                            description={feature.descriptions}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}