import { Footer } from "@/components/ui/footer-section";
import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { Conclusion } from "@/components/sections/conclusion";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PilotPlan } from "@/components/sections/pilot-plan";
import { Pricing } from "@/components/sections/pricing";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { ReportContent } from "@/components/sections/report-content";
import { Revenue } from "@/components/sections/revenue";
import { Risk } from "@/components/sections/risk";
import { TargetCustomer } from "@/components/sections/target-customer";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <TargetCustomer />
        <HowItWorks />
        <Pricing />
        <ReportContent />
        <Revenue />
        <PilotPlan />
        <Risk />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
}
