'use server';

import axios from '@/utils/axios';
import { HOST_APP_KEY } from '@/config/env';

type HeroImage = {
  id: string;
  images: string[];
};

export async function getHeroImages(): Promise<HeroImage[]> {
  try {
    const { data } = await axios.get<{ images: string[] }>('api/readfiles', {
      baseURL: HOST_APP_KEY,
    });

    if (!data.images.length) {
      throw new Error('Not found hero images');
    }

    return data.images.map((img, index) => {
      const image = data.images.slice(index, index + 5);

      return {
        id: img,
        images: image,
      };
    });
  } catch (error) {
    console.error(error);

    throw new Error('Failed to get hero images');
  }
}
