import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
