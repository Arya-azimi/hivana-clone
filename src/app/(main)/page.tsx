import {
  ContactForm,
  FeaturesSection,
  HeroSection,
  ResumeSlider,
  ShortAbout,
  PricingPlan,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ResumeSlider />
      <ShortAbout />
      <PricingPlan />
      <ContactForm />
    </>
  );
}
