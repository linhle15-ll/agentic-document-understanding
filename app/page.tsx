import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import Footer from "@/components/footer";
import ClientSlider from "@/app/sections/client-slider";
import ProductMetrics from "./metrics/page";
import ProductBenefits from "./sections/benefits";
import ProductUseCases from "./sections/use-cases";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <section className="flex flex-col items-center gap-4 py-8 md:py-10 w-full">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title({ color: "violet", size: "lg"})}>Agentic Document Understanding</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            Beyond OCR: Intelligent Document Understanding with Visual Context. Convert decades of archived documents into LLM-ready data in hours rather than weeks.
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8 flex justify-center">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started with <Link href="/settings"><Code color="primary">playground</Code></Link>
            </span>
          </Snippet>
        </div>
      </section>
      
      <div className="flex flex-col items-center text-center mt-36 max-w-7xl w-full">
        <div className={title({ color: "violet", size: "md"})}> Intelligent Document Understanding </div>
        <div className={subtitle({ class: "mt-4" })}>
          Agentic document extraction captures important details – including the different form fields, tables, and checkboxes – and provides accurate descriptions for these elements based on their visual layout. So you can prepare data for downstream applications
        </div>
      </div>

      <ClientSlider />
      {/* TODO: On hover each company --> company/ industry use cases */}
      <ProductBenefits />
      <ProductMetrics />
      <ProductUseCases />
      <Footer />
    </div>
  );
}
