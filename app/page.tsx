'use client';
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import Footer from "@/app/sections/footer";
import ClientSlider from "@/components/client-slider";
import ProductBenefits from "./sections/benefits";
import ProductUseCases from "./sections/use-cases";
import ProductFeatures from "./sections/features";
import ActionCall from "./sections/action-call";
import { MainNavbar } from "@/components/navbar";
export default function Home() {
  return (
    <div>
      <MainNavbar />
      <div className="flex flex-col items-center w-full">
        <section className="flex flex-col items-center gap-4 py-10 w-full">
          <div className="flex flex-col gap-4 items-center text-center m-16 w-full bg-lightWhite">
            <div className={title({ class: "text-darkBlue", size: "lg" }) + " pb-4"}> Intelligent Document Understanding </div>
            <div className={subtitle({ class: "mt-4 max-w-3xl" })}>
              Agentic document extraction captures important details – including the different form fields, tables, and checkboxes – and provides accurate descriptions for these elements based on their visual layout. So you can prepare data for downstream applications
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
                Get started with <Link href="/project"><Code color="primary">playground</Code></Link>
              </span>
            </Snippet>
          </div>
        </section>

        <ClientSlider />
        {/* TODO: On hover each company --> company/ industry use cases */}
        <ProductBenefits />
        <ProductUseCases />
        <ProductFeatures />
        <ActionCall />
        <Footer />
      </div>
    </div>
  );
}
