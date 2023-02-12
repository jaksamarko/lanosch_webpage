export interface BlogBadge {
  text?: string;
  style?: string;
}

export interface BlogPost {
  /* id: number;
  title: string;
  description: string;
  author: string;
  date: Date;
  badges?: string[];
  image_url: string;
  paragraphs?: BlogParagraph[]; */
  path: string;
  title: string;
}
