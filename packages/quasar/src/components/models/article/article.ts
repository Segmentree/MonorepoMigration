import { StoryblokImage } from '@ligo/shared/storyblok';
import { InformationBox, SquareBanner, QuotationBox } from '../';

type ArticleMenuItem = {
  sectionReference: string;
  text: string;
};

export interface ArticleMenuShare {
  title: string;
  links: { icon: StoryblokImage; link: string }[];
}

export interface ArticleMenuContact {
  title: string;
  contacts: { icon: StoryblokImage; text: string; link: string }[];
}

export enum ArticleTextComponents {
  Text = 'TextField',
  Link = 'LinkField'
}

export interface ArticleTextSection {
  component: string;
  label: string;
  text: string;
  link?: string;
  color?: {
    selected: string;
  };
}

export interface Subtitle {
  text: string;
}
export interface BulletPointsList {
  list: string[];
}

export interface VideoField {
  url: string;
}

interface ArticleContent {
  component:
    | 'ArticleTextSection'
    | 'ImageField'
    | 'InformationBox'
    | 'SquareBanner'
    | 'QuotationBox'
    | 'Subtitle'
    | 'BulletPointsList'
    | 'VideoField';
  content:
    | ArticleTextSection[]
    | StoryblokImage
    | InformationBox
    | SquareBanner
    | QuotationBox
    | Subtitle
    | BulletPointsList
    | VideoField;
}

export interface ArticleMenu {
  title: string;
  items: ArticleMenuItem[];
  share?: ArticleMenuShare;
  contact?: ArticleMenuContact;
}

export interface ArticleSection {
  title: string;
  subtitle: string;
  reference: string;
  contents: ArticleContent;
}

export interface Article {
  menu: ArticleMenu;
  sections: ArticleSection;
}
