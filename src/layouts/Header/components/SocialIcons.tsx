import type { FlexProps } from "@chakra-ui/react";
import { Flex, Icon } from "@chakra-ui/react";
import { VscGithubInverted, VscMail, VscTwitter } from "react-icons/vsc";

import { EXTERNAL_LINK } from "@/constants/externalLink";

const ITEMS = [
  {
    icon: VscTwitter,
    href: EXTERNAL_LINK.twitter,
  },
  {
    icon: VscGithubInverted,
    href: EXTERNAL_LINK.github,
  },
  {
    icon: VscMail,
    href: EXTERNAL_LINK.mail,
  },
];

type Props = Pick<FlexProps, "ml">;

export const SocialIcons: React.FC<Props> = ({ ...flexProps }) => {
  return (
    <Flex
      gridGap={{ base: "4", sm: "6" }}
      {...flexProps}
    >
      {ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          rel="noreferrer"
          target="_blank"
        >
          <Icon
            as={item.icon}
            boxSize={{ base: "6", xl: "7" }}
            color="gray.600"
          />
        </a>
      ))}
    </Flex>
  );
};
