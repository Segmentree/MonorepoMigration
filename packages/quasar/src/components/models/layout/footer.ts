import { I18nConditioned } from './locale.helpers';

type footerColumn = {
  title: string;
  items: FooterLink[];
};

type contactSupport = {
  title: string;
  subtitle: string;
  icon: string;
  actionText: string;
  actionTextMobile?: string;
  info: string[];
  action: () => void;
};

export interface FooterLink extends I18nConditioned {
  text: string;
  link?: string;
  external?: boolean;
  badge?: string;
}

export interface SocialMediaLink {
  icon: string;
  link: string;
}

export interface FooterConfig {
  support: contactSupport[];
  columns: footerColumn[];
  social: SocialMediaLink[];
}
