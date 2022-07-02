export type component<T> = {
  [P in keyof T]: T[P];
} & { component: string; _uid: string };

export type Story<T> = {
  content: {
    body: component<T>[];
  };
};

export interface ApiResponse<T> {
  data: {
    story: Story<T>;
  };
}

export interface ApiResponseList<T> {
  data: {
    stories: Story<T>[];
  };
}

export interface ApiFilterOptions {
  fields?: string[];
  reference?: string;
  search: string;
  editDistance?: number;
}
