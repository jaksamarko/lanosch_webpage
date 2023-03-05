export interface BlogBadge {
  text?: string;
  style?: string;
}

export interface BlogPost {
  id: string;
  attributes: {
    content: string;
    createdAt: string;
    tags: string;
    updatedAt: string;
    title: string;
  };
}
