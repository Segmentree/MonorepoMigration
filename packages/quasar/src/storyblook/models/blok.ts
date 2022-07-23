type hashEntry = {
  aliasUrl: string;
  originalUrl: string;
};
export interface Blok {
  component: string;
}

export interface Hash {
  story: {
    content: {
      body: {
        EN: hashEntry[];
        NL: hashEntry[];
        addEnglishPrefix: { text: string }[];
      }[];
    };
  };
}
