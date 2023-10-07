interface IPost {
  id: number;
  author: number;
  header: string;
  link: string;
  featured_media: string;
  slug: string;
  date: string;
  group: Array<number>;
  categories: Array<number>;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded: {
    author: Array<IAuthor>;
    ["wp:term"]: Array<Array<ITerm>>;
  };
}

interface IAuthor {
  id: number;
  link: string;
  name: string;
}

interface ITerm {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: "category" | "group";
}

export type { IPost, ITerm, IAuthor };
