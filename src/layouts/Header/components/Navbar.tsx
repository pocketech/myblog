import type { ButtonGroupProps } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

import { NAVIGATION } from "../constants";
import { ActiveLink } from "./ActiveLink";

type Props = { size: "sm" | "md" } & Pick<
  ButtonGroupProps,
  "ml" | "mr" | "display"
>;

const SPACING_SCALE: { [P in Props["size"]]: string } = {
  sm: "0.5",
  md: "1.5",
};
const ICON_SCALE: { [P in Props["size"]]: string } = {
  sm: "4",
  md: "5",
};

/**
 * @package
 */
export const NavBar: React.FC<Props> = ({
  size = "md",
  ...buttonGroupProps
}) => {
  return (
    <ButtonGroup
      spacing={SPACING_SCALE[size]}
      size={size}
      as="nav"
      {...buttonGroupProps}
    >
      {NAVIGATION.map((item) => (
        <ActiveLink
          href={item.href}
          rootPath="/"
          key={item.href.pathname}
          passHref
        >
          {(isActive) => (
            <Button
              as="a"
              variant="ghost"
              leftIcon={
                <Icon
                  as={item.icon}
                  boxSize={ICON_SCALE[size]}
                />
              }
              isActive={isActive}
            >
              {item.name}
            </Button>
          )}
        </ActiveLink>
      ))}
    </ButtonGroup>
  );
};
