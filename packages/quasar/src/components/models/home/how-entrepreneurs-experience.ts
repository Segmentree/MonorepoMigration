import { SubBanner } from '../global-types/global-types';

export type Slide = {
  title: string;
  subtitle: string;
  text: string;
  img: string;
};

export type Video = {
  img: string;
  url: string;
};

export interface HowEntrepreneursExperienceConfig {
  title: string;
  subtitle: string;
  video_link: Video;
  carousel: Array<Slide>;
  foot_banner: SubBanner;
}
