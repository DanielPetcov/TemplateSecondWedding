import FirstPageTitle from "@/components/sections/FirstPageTitle";
import HeroJustDetails from "@/components/sections/HeroJustDetails";
import HeroRSVP from "@/components/sections/HeroRSVP";
import QuadroMenu from "@/components/sections/QuadroMenu";

export default function Home() {
  return (
    <div>
      <FirstPageTitle firstName="Jenny" secondName="Jason" />
      <div className="relative bg-white">
        <HeroJustDetails
          bgImage="/papadie.png"
          details={[
            "With love and gratitude, we invite you to share in the joy of our wedding day.",
            "Saturday, September 20, 2025 The Golden Elm Manor, St. Augustine, New York",
          ]}
        />
        <div className="relative container mx-auto my-10 px-4">
          <QuadroMenu
            data={[
              {
                title: "Povestea noastră",
                url: "/povestea-noastra",
                bgImage: "/twohandsknuckle.png",
              },
              {
                title: "Detalii",
                url: "/detalii",
                bgImage: "/pear.png",
              },
              {
                title: "RSVP",
                url: "/rsvp",
                bgImage: "/houses-details.png",
              },
              {
                title: "Registry",
                url: "/rsvp",
                bgImage: "/dead-flower.png",
              },
            ]}
            className="max-w-4xl mx-auto 3xl:max-w-none"
          />
        </div>
        <HeroRSVP
          title="REGISTRY"
          content="Your presence is the most cherished gift. Should you wish to contribute, we've created a honeymoon registry to help us embark on a memorable adventure to the Amalfi Coast."
          bgImage="/flowers-rsvp.png"
        />
      </div>
    </div>
  );
}
