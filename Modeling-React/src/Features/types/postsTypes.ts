export type TypePostInfo = {
  id?: string;
  text: string;
  image: string;
  likes: number;
  link?: string;
  tags: string[];
  publishDate?: string;
  owner: { firstName: string; lastName: string; picture: string; id: string, title?: string } | string;
};

export type Prop = {
  post: TypePostInfo;
  setLink: (link: string) => void;
};
