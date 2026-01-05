import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { FlightSearch } from "@/components/home/FlightSearch";
import { LuxuryHotels } from "@/components/home/LuxuryHotels";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";
import { LatestBlog } from "@/components/home/LatestBlog";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FlightSearch />
      <FeaturedDestinations />
      <LuxuryHotels />
      <WhyChooseUs />
      <Testimonials />
      <LatestBlog />
      <Newsletter />
    </>
  );
}
