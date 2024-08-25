import NextImage, { type ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'priority' | 'loading'>;

export default function Image({ src, alt, ...other }: Readonly<Props>) {
  return (
    <div className="relative w-full">
      <NextImage
        src={src}
        alt={alt}
        objectFit="cover"
        objectPosition="center"
        {...other}
      />
    </div>
  );
}
