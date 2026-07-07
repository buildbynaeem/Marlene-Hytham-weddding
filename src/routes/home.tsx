import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/wedding/Hero";
import { OurStory } from "@/components/wedding/OurStory";
import { QuoteDivider } from "@/components/wedding/QuoteDivider";
import { Details } from "@/components/wedding/Details";
import { Location } from "@/components/wedding/Location";
import { Gallery } from "@/components/wedding/Gallery";
import { Rsvp } from "@/components/wedding/Rsvp";
import { Footer } from "@/components/wedding/Footer";
import { AudioPlayer } from "@/components/wedding/AudioPlayer";

export const Route = createFileRoute("/home")({
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <OurStory />
      <QuoteDivider />
      <Details />
      <Location />
      <Gallery />
      <Rsvp />
      <Footer />
      <AudioPlayer />
    </main>
  );
}
