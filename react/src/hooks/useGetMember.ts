import { useEffect, useState } from "react";
import MemberInterface from "../interfaces/member.interface";
import jsonFetch from "../util/jsonFetch";
import replaceImageUrl from "../util/replaceImageUrl";

function useGetMember(id: string) {
  const [member, setMember] = useState<MemberInterface>();

  useEffect(() => {
    jsonFetch(
      `/api/members/${id}?populate=*`,
      ({ data }: { data: MemberInterface }) => {
        replaceImageUrl(data.attributes.avatar);
        setMember(data);
      }
    );
  }, []);

  return member;
}

export default useGetMember;
