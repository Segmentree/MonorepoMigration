import { StoryblokImage } from '@ligo/shared/storyblok';
import { Button, SectionBanner } from '../global-types/global-types';

export type LawyerCard = {
  title: string;
  img: StoryblokImage;
  subtitle: string;
  rating: string;
  list: Array<string>;
  action: Button;
};
export interface MeetSomeOfTheSpecializedLawyersConfig {
  title: string;
  subtitle: string;
  subtitle_2?: string;
  cards: Array<LawyerCard>;
  banner: SectionBanner;
}
