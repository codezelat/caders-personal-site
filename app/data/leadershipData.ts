export type LeadershipRole = {
  id: number;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  category: string;
  title: string;
};

export const leadershipData: LeadershipRole[] = [
  {
    id: 1,
    logoSrc: "/images/lbcicon.png",
    logoAlt: "London Business Consultancy",
    logoWidth: 200,
    logoHeight: 60,
    category: "Expanding Global Strategy",
    title: "Executive Board Member – LBC UK",
  },
  {
    id: 2,
    logoSrc: "/images/Sitc.jpg",
    logoAlt: "SITC Campus",
    logoWidth: 200,
    logoHeight: 70,
    category: "Transforming Education",
    title: "CEO – SITC Campus",
  },
  {
    id: 3,
    logoSrc: "/images/codezela.png",
    logoAlt: "Codezela Technologies",
    logoWidth: 207,
    logoHeight: 90,
    category: "Fueling Digital Innovation",
    title: "COO – Codezela Technologies",
  },
];
