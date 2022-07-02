import { StoryblokImage } from '@ligo/shared/storyblok';
import { SubBanner, Button } from '../global-types/global-types';

export interface MainBannerConfing {
  ranking_banner: boolean;
  right_image: StoryblokImage;
  right_image_placeholder?: StoryblokImage;
  right_image_mobile?: StoryblokImage;
  title: string;
  subtitle?: string;
  text?: string;
  list?: {
    icon?: StoryblokImage;
    items: Array<string>;
  };
  append_banner?: SubBanner;
  foot_banner?: SubBanner;
  type: 'top' | 'center';
  buttons?: Array<Button>;
}
