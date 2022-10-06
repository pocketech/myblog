import { Stack } from "@chakra-ui/react";
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { IconAnchor } from "./IconAnchor";

const items = [
  {
    label: "Facebook",
    icon: <FaFacebook />,
    href: "#",
  },
  {
    label: "Instagram",
    icon: <FaInstagram />,
    href: "#",
  },
  {
    label: "Twitter",
    icon: <FaTwitter />,
    href: "#",
  },
  {
    label: "Github",
    icon: <FaGithub />,
    href: "#",
  },
  {
    label: "Dribble",
    icon: <FaDribbble />,
    href: "#",
  },
];
/**
 * @package
 */
export const SocialIconGroup: React.FC = () => {
  return (
    <Stack
      direction="row"
      spacing={6}
      fontSize={20}
    >
      {items.map((item) => (
        <IconAnchor
          label={item.label}
          href={item.href}
          icon={item.icon}
          key={item.label}
        />
      ))}
    </Stack>
  );
};
