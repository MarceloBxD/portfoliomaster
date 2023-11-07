import LinkedinIcon from "@/icons/svgs/LinkedinIcon";
import InstagramIcon from "@/icons/svgs/InstagramIcon";

type socialMediaProps = {
  id: number;
  name: string;
  href: string;
  icon: React.FC;
};

export const socialMediaItems: socialMediaProps[] = [
  {
    id: 0,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marcelo-bracet/",
    icon: LinkedinIcon,
  },
  {
    id: 1,
    name: "Instagram",
    href: "https://www.instagram.com/_bracetmarcelo/",
    icon: InstagramIcon,
  },
];
