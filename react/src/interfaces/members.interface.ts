interface MemberInterface {
  id: number;
  attributes: {
    name: string;
    about: string;
    avatar: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    url: string;
    rank: string;
  };
}

export default MemberInterface;
