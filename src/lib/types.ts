export type Categories = 'filosofia' | 'posmodernismo' | 'hegel' | 'liberalismo';

export type Post = {
  title: string;
  slug: string;
  description: string;
  categories: Categories[];
  date: string;
  published: boolean;
};
