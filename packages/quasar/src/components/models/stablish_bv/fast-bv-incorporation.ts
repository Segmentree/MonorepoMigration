import { MembershipCard } from '../global-types/global-types';

export interface FastBvIncorporationConfig {
  title: string;
  subtitle: string;
  page_foot: string;
  page_foot_2: string;
  information?: string;
  page_second_foot?: string;
  cards: Array<MembershipCard>;
}
