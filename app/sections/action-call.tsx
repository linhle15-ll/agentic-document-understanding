import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";

export default function ActionCall() {
  return (
    <section className="w-full py-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl flex flex-col items-center text-center">
        <div
          className={title({
            class: "text-darkBlue mb-4 leading-tight lg:leading-snug",
            size: "lg",
          })}
        >
          Ready to Transform Your Document Workflow?
        </div>
        <div className={subtitle({ class: "mb-8" })}>
          Start extracting, enriching, and understanding your documents with
          agentic intelligence. Get started in minutes—no credit card required.
        </div>
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/project"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
