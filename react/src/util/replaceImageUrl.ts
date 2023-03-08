import CmsInterface from "../interfaces/cmsImage.interface";

function replaceImageUrl(attributes: CmsInterface) {
  if (!attributes?.data) return;
  attributes.url = `${(import.meta as any).env.VITE_BACKEND}${
    attributes.data.attributes.url
  }`;
}

export default replaceImageUrl;
