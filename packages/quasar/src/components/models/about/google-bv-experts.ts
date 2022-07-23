import { RankingCards } from '../index';

export interface GoogleBVExpertsConfig {
  ranking_img1: string;
  ranking_img2: string;
  title: string;
  subtitle: string;
  text: string;
  cards: Array<RankingCards>;
  video: string;
}
