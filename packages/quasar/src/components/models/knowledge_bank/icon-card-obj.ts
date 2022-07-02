import { StoryblokImage } from '@ligo/shared/storyblok';

export interface IconCardObject {
  image: StoryblokImage;
  title: string;
  link: string;
  external?: boolean;
}
