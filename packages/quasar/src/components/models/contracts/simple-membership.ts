import { StrikeThrough } from '../global-types/global-types';

export interface SimpleMembership {
  title: string;
  subtitle: string;
  dark: boolean;
  price: StrikeThrough;
  footText: string;
  btnText: string;
  badge?: string;
  external?: string;
  post?: string;
  buttonLink?: string;
}
