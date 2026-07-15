import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/wedding/Hero";

import { QuoteDivider } from "@/components/wedding/QuoteDivider";
import { Countdown } from "@/components/wedding/Countdown";
import { DestinationCalendar } from "@/components/wedding/DestinationCalendar";
import { Location } from "@/components/wedding/Location";
import { Schedule } from "@/components/wedding/Schedule";


import { Footer } from "@/components/wedding/Footer";
import { AudioPlayer } from "@/components/wedding/AudioPlayer";

export const Route = createFileRoute("/home")({
  component: Home,
});

function Home() {
  return (
    <main className="w-full max-w-[100vw] overflow-x-hidden">
      <Hero />
      <Countdown />
      <DestinationCalendar />

      <QuoteDivider />
      <Location />
      <Schedule />


      <Footer />
      <AudioPlayer />
    </main>
  );
}
