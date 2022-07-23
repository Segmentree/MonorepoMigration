import { StoryblokImage } from '@ligo/shared/storyblok';
import { MembershipCardList } from '@ligo/shared/models';

export type BlokImage = {
  filename: string;
};

export type SubBanner = {
  src: StoryblokImage;
  mobile?: StoryblokImage;
};

export type StrikeThrough = {
  rightString: string;
  leftString: string;
};

export interface TextItem {
  text: string;
  icon?: StoryblokImage;
  highlighted: boolean;
}

export interface BannerList {
  icon?: StoryblokImage;
  items: Array<TextItem>;
}

export type Button = {
  color?: string;
  key: string;
  emit?: string;
  link?: string;
  external?: boolean;
  arguments?: any;
  outline?: boolean;
  post?: boolean;
  strikeThrough?: StrikeThrough;
};

export interface MediaButton extends Button {
  icon: { filename: string };
  video_url: string;
  image: { filename: string };
}

export type SectionBanner = {
  icon?: StoryblokImage;
  text: string;
  button: Button;
};

export type PurpleCard = {
  icon?: StoryblokImage;
  title: string;
  text: string;
};

export type RankingCards = {
  icon?: StoryblokImage;
  title: string;
  ranking: string;
  rankingBase: string;
  text: string;
  rankingPlataformIcon?: StoryblokImage;
  rankingPlataformStarIcon?: StoryblokImage;
};

export type StepButton = {
  icon: StoryblokImage;
  title: string;
  text?: string;
  active?: boolean;
  size?: string;
};

export type StepCard = {
  title: string;
  text?: string;
  icon: StoryblokImage;
  _uid: string;
};

export type MembershipCard = {
  type: string;
  complete?: boolean;
  old_price?: string;
  discount?: string;
  price: string;
  highlight_price?: boolean;
  incorporations_days: string;
  btn: string;
  items: Array<MembershipCardList>;
  customLink: string;
  post: boolean;
};

export type MembershipListFoot = {
  text: string;
  _uid: string;
};

export interface IconListItem {
  text: string;
  icon: StoryblokImage;
}

export interface CarouselSlide {
  title: string;
  subtitle: string;
  text: string;
  img: StoryblokImage;
}

export interface CategoryItem {
  category: string;
  title: string;
}

export interface LandingSectionBannerButton {
  buttonBgColor: string;
  buttonFontColor: string;
  buttonText: string;
  buttonLink?: string;
  external: boolean;
  post: boolean;
}

export interface LegalCheckupDoc {
  text: string;
  image: StoryblokImage;
  _uid: string;
}

export interface MembershipSection {
  titleLeft: string;
  titleRight?: string;
  subtitle: string;
  bulletPoints: string[];
}
