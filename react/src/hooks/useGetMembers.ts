import { useEffect, useState } from "react";
import MemberInterface from "../interfaces/members.interface";

function useGetMembers() {
  const [members, setMembers] = useState<MemberInterface[]>([]);

  useEffect(() => {
    fetch(`${(import.meta as any).env.VITE_BACKEND}/api/members?populate=*`)
      .then((res) => res.json())
      .then((post) => {
        (post.data as MemberInterface[]).forEach((member) => {
          const attrs = member.attributes.avatar.data.attributes;
          member.attributes.url = `${(import.meta as any).env.VITE_BACKEND}${
            attrs.url
          }`;
        });
        setMembers(post.data);
      });
  }, []);

  return members;
}

export default useGetMembers;
