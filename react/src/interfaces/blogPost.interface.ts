import CmsInterface from "./cmsImage.interface";

export interface BlogBadge {
  text?: string;
  style?: string;
}

export interface BlogPost {
  id: string;
  attributes: {
    description: string;
    header: CmsInterface;
    content: string;
    createdAt: string;
    tags: string;
    updatedAt: string;
    title: string;
  };
}
