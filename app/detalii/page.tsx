import AboutCard from "@/components/sections/AboutCard";
import Hero from "@/components/sections/Hero";
import HeroRSVP from "@/components/sections/HeroRSVP";
import ImageCard from "@/components/sections/ImageCard";
import InvitationCard from "@/components/sections/InvitationCard";
import TwoColumnTextImage from "@/components/sections/TwoColumnTextImage";

export default function DetaliiPage() {
  return (
    <div>
      <Hero bgImage="/details-hero-image.png" title="The details" />
      <div className="container max-w-4xl 3xl:max-w-none mx-auto px-4">
        <InvitationCard className="mt-10 lg:mt-20" />
        <ImageCard
          bgImage="/houses-details.png"
          className="my-10 aspect-square lg:aspect-video"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mb-10">
          <AboutCard
            data={[
              {
                title: "Date:",
                content: "Saturday, September 20, 2025",
              },
              {
                title: "Venue:",
                content: "The Golden Elm Manor, St. Augustine, NY",
              },
              {
                title: "Ceremony Begins:",
                content: "4:30 PM",
              },
              {
                title: "Reception:",
                content: "6:00 PM – Midnight",
              },
            ]}
          />
          <AboutCard
            data={[
              {
                title: "Musical Guest:",
                content:
                  "The Starlight Quartet, followed by a surprise jazz ensemble.",
              },
              {
                title: "Dinner:",
                content:
                  "A seasonal farm-to-table menu featuring dishes inspired by our favorite travels.",
              },
            ]}
          />
        </div>
      </div>
      <Hero bgImage="/travelstay.png" title="Travel & Stay" />
      <div className="my-10 space-y-10 lg:space-y-20 container max-w-4xl mx-auto 3xl:max-w-none px-4 ">
        <TwoColumnTextImage
          text="Golden Elm Manor is a 90-minute train ride from Grand Central Station, with direct routes to St. Augustine. Complimentary shuttles will be available from the station to the T."
          image="/flowers.png"
        />
        <TwoColumnTextImage
          text="We’ve reserved charming accommodations at The Wildflower Inn – Cozy & quaint, right in town. The Fox & Finch Manor – A historic stay just minutes from the venue."
          image="/wildflowerInn.png"
          reverse={true}
        />
      </div>
      <HeroRSVP
        title="REGISTRY"
        content="Your presence is the most cherished gift. Should you wish to contribute, we've created a honeymoon registry to help us embark on a memorable adventure to the Amalfi Coast."
        bgImage="/flowers-rsvp.png"
      />
    </div>
  );
}
