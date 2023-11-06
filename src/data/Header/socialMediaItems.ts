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
    href: "https://www.linkedin.com/in/steven-mercatante/",
    icon: LinkedinIcon,
  },
  {
    id: 1,
    name: "Instagram",
    href: "",
    icon: InstagramIcon,
  },
];
