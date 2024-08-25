'use server';

import Link from '@/components/button/link';
import HeroCarousel from '@/components/carousel/hero-carousel';

import { getHeroImages } from '@/lib/actions/homepage';

export default async function Home() {
  const images = await getHeroImages();

  return (
    <main className="md:container md:mx-auto space-y-6">
      {/* HEADER */}
      <div className="flex flex-col items-center justify-center w-full p-20 pb-4 space-y-6">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-center text-black">
            Find Your Next Flight
          </h1>
          <p className="inline-block text-lg text-center">
            Search and booking flights easily with our simple and efficient
            flight search and booking system.
          </p>
        </div>

        <Link
          linkTo="#search-flight"
          className="text-base text-white bg-primary max-w-max rounded-3xl"
        >
          Search Flights
        </Link>
      </div>
      {/* CAROUSEL */}
      <HeroCarousel items={images} alt="travel" />

      {/* SEARCH FORM */}
    </main>
  );
}
