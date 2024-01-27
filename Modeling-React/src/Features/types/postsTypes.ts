export type TypePostInfo = {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: string[];
  publishDate: string;
  owner: { firstName: string; lastName: string; picture: string; id: string };
};

export type Prop = {
  post: TypePostInfo;
  setLink: (link: string) => void;
};
