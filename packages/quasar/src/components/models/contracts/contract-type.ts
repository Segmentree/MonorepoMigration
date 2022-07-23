import { CategoryItem } from '..';

export interface ContractType extends CategoryItem {
  price: string;
  url?: string;
  external?: boolean;
  post?: boolean;
}
