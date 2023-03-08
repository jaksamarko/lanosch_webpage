import { useEffect, useState } from "react";
import MemberInterface from "../interfaces/member.interface";
import jsonFetch from "../util/jsonFetch";
import replaceImageUrl from "../util/replaceImageUrl";

const fields = "&fields[0]=name&fields[1]=rank";

function useGetMembers() {
  const [members, setMembers] = useState<MemberInterface[]>([]);

  useEffect(() => {
    jsonFetch(`/api/members?populate=avatar,post${fields}`, (members) => {
      (members.data as MemberInterface[]).forEach((member: MemberInterface) => {
        replaceImageUrl(member.attributes.avatar);
      });
      setMembers(members.data);
    });
  }, []);

  return members;
}

export default useGetMembers;
