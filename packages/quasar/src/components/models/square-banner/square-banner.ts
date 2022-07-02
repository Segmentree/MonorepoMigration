import { StoryblokImage } from '@ligo/shared/storyblok';

export interface SquareBanner {
  img: StoryblokImage;
  ctaLabel: string;
  ctaUrl: string;
  text: string;
}
