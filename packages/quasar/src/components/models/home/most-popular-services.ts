import { Button } from '../global-types/global-types';
export interface ServiceCard {
  title: string;
  icon: string;
  price: string;
  button: Button;
  link: string;
  features: Array<string>;
  popular?: boolean;
  discount?: string;
}

export interface MostPopularServicesConfig {
  title: string;
  cards: Array<ServiceCard>;
}
