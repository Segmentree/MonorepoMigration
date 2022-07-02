import { SectionBanner } from '../global-types/global-types';

export type TeamCardsListComponent = {
  //this can be a team card or a separator of sections
  color: 'purple' | 'green';
  position: 'top-center' | 'bottom-left' | 'right';
  img: string;
  text: string;
  title: string;
  subtitle: string;
  sectionSubtitle?: string; //if this is present then this is a separator not a team card
};

export interface PeopleOfTheTeamConfig {
  title: string;
  cards: Array<TeamCardsListComponent>;
  foot_banner: SectionBanner;
}
