import { StoryblokImage } from '@ligo/shared/storyblok';
import { I18nConditioned } from './locale.helpers';

export interface ToolbarLink extends I18nConditioned {
  text: string;
  link: string;
  highlight?: boolean;
  badge?: string;
}

interface SubmenuBanner {
  title: string;
  subtitle: string;
  actionColor: string;
}

export interface SubmenuBannerPhone {
  text: string;
  url: string;
  icon: string;
}

interface ToolbarSubmenuBanner extends SubmenuBanner {
  img: string;
  cta?: {
    text: string;
    url: string;
  };
  phone?: SubmenuBannerPhone;
}

interface SubItem {
  name: string;
  links: ToolbarLink[];
}

export interface ToolbarSubItem extends SubItem {
  icon?: string;
}

interface ConfigItem {
  _uid: string;
  name: string;
  link?: string;
}

export interface ToolbarConfigItem extends ConfigItem {
  submenuBanner?: ToolbarSubmenuBanner;
  subitems?: Array<ToolbarSubItem>;
}

export interface ToolbarConfig {
  logo: string;
  menuIcon: string;
  items: ToolbarConfigItem[];
}

interface StoryblokToolbarSubitem extends SubItem {
  icon?: StoryblokImage;
}

export interface StoryblokToolbarSubmenuBanner extends SubmenuBanner {
  img: StoryblokImage;
  cta?: {
    text: string;
    url: string;
  }[];
  phone?: {
    text: string;
    url: string;
    icon: StoryblokImage;
  }[];
}

export interface StoryblokToolbarConfigItem extends ConfigItem {
  submenuBanner?: StoryblokToolbarSubmenuBanner[];
  subitems?: Array<StoryblokToolbarSubitem>;
}

export interface StoryblokToolbarConfig {
  logo: StoryblokImage;
  menuIcon: StoryblokImage;
  items: StoryblokToolbarConfigItem[];
}

export interface StoryblokToolbarResponse {
  data: {
    story: {
      content: {
        body: StoryblokToolbarConfig;
      };
    };
  };
}
