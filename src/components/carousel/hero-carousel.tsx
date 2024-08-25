'use client';

import { cn } from '@/utils/client';

import CustomImage from '../image/image';

type Props = {
  items: {
    id: string;
    images: string[];
  }[];
  alt: string;
};

export default function HeroCarousel({ items, alt }: Readonly<Props>) {
  return (
    <div className={cn('w-full gap-6 flex flex-col relative')}>
      <div className="w-full gap-4 flex overflow-hidden [mask-image:linear-gradient(to_right_transparent_black_1%_black_99%_transparent)]">
        {/* DISPLAY CONTENT */}

        {/* GROUP ITEM */}
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-around flex-shrink-0 min-w-full gap-4 animate-[scroll-x_20s_linear_infinite]"
          >
            {item.images.map((img) => (
              <CustomImage
                width={400}
                height={400}
                key={img}
                src={img}
                alt={alt}
                className="size-96 w-full md:transition-[0.3s] hover:scale-105 aspect-square rounded-lg"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
