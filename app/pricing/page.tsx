import { title } from "@/components/primitives";
import PricingCard from "./pricing-card";

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Pricing</h1>

      <PricingCard />
    </div>
  );
}
