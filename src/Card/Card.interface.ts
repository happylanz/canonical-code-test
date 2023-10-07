import { IAuthor } from "../App.interface";

interface ICard {
  id: number;
  header: string;
  featuredImg: string;
  featuredAlt: string;
  title: string;
  link: string;
  author?: IAuthor;
  categories: string;
  createdDate: string;
}

export type { ICard };
