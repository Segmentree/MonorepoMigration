import { StoryblokImage } from '@ligo/shared/storyblok';

export interface CardWithImageObj {
  tag: string;
  title: string;
  subtitle?: string;
  link: string;

  image?: StoryblokImage;
}
