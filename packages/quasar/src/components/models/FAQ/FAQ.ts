type Sentence = {
  text: string;
  link_ref?: string;
  link_text?: string;
};

type ItemList = {
  title: string;
  title_link?: string;
  paragraph?: Array<Sentence>;
};

export type ExpansionItem = {
  title: string;
  link?: string;
  content: Array<{
    type: 'paragraph' | 'list';
    info: Array<Sentence> | Array<ItemList>;
  }>;
  locale?: string[]
};

export interface FAQConfig {
  title: string;
  items: Array<ExpansionItem>;
}
