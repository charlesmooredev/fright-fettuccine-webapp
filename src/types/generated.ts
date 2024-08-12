import { BlogType } from '../helpers/BlogsHelper';

export type BlogData = {
  id: number;
  title: string;
  image: string;
  poster: string;
  sections: string[];
  type: BlogType;
  comments: BlogCommentData[];
};

export type BlogCommentData = {
  poster: string;
  comment: string;
  date: string;
};
