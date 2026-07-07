import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/wedding/Navigation";
import { Hero } from "@/components/wedding/Hero";
import { OurStory } from "@/components/wedding/OurStory";
import { QuoteDivider } from "@/components/wedding/QuoteDivider";
import { Details } from "@/components/wedding/Details";
import { Gallery } from "@/components/wedding/Gallery";
import { Rsvp } from "@/components/wedding/Rsvp";
import { Footer } from "@/components/wedding/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <Navigation />
      <Hero />
      <OurStory />
      <QuoteDivider />
      <Details />
      <Gallery />
      <Rsvp />
      <Footer />
    </main>
  );
}
