export interface ProfileSocials {
  fbook?: string;
  igram?: string;
  disc?: string;
  twitt?: string;
  githb?: string;
  pek?: string;
}

export interface TeamProfileInterface {
  name: string;
  image: string;
  role: "Körvezető" | "Tag" | "Gazdaságis" | "Padawan";
  socials: ProfileSocials;
}

export function findTeamMemberByName(name: string) {
  return teamMembers.filter((v) => v.name === name)[0];
}

const teamMembers: TeamProfileInterface[] = [
  {
    name: "Fejes Dániel (Koki)",
    role: "Körvezető",
    image: "/assets/images/team_koki.png",
    socials: {
      fbook: "https://www.facebook.com/fejes.danika",
      disc: "Koki#9483",
      pek: "https://pek.sch.bme.hu/profiles/koki",
    },
  },
  {
    name: "Karakas Dávid",
    role: "Tag",
    image: "/assets/images/team_david.png",
    socials: {
      pek: "https://pek.sch.bme.hu/profiles/Yay",
    },
  },
  {
    name: "Fábry-Nagy Enikő",
    image: "/assets/images/team_eni.png",
    role: "Gazdaságis",
    socials: {
      pek: "https://pek.sch.bme.hu/profiles/mitzuki.sch.bme.hu",
    },
  },
  {
    name: "Gál Gyula",
    image: "/assets/images/team_gyula.jpg",
    role: "Tag",
    socials: {
      pek: "https://pek.sch.bme.hu/profiles/Nagyon_szeretem_a_tejet",
    },
  },
  {
    name: "Jaksa Márkó Dániel",
    image: "/assets/images/team_marko.png",
    role: "Tag",
    socials: {
      disc: "iDroppedMyCroissant#5117",
      fbook: "https://www.facebook.com/jaksa.marko",
      pek: "https://pek.sch.bme.hu/profiles/jmarko",
    },
  },
  {
    name: "Barta Zsombor",
    image: "/assets/images/team_zsombor.png",
    role: "Tag",
    socials: {
      pek: "https://pek.sch.bme.hu/profiles/bmzsombi",
    },
  },
  {
    name: "Pozsonyi Balázs",
    image: "/assets/images/team_default.png",
    role: "Tag",
    socials: {
      pek: "https://pek.sch.bme.hu/profiles/Pozsi%20",
    },
  },
];

export default teamMembers;
