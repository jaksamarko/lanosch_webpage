import { BlogPost } from "./blogPost.interface";
import CmsInterface from "./cmsImage.interface";

interface MemberInterface {
  id: number;
  attributes: {
    name: string;
    about: string;
    avatar: CmsInterface;
    rank: string;
    post: {
      data: BlogPost;
    };
  };
}

export default MemberInterface;
