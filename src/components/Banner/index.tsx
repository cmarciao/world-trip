import { ReactNode } from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

interface BannerProps extends FlexProps {
  children: ReactNode;
}

export function Banner({ children, ...props }: BannerProps) {
  return (
    <Flex
      justify={"center"}
      bgImage={"/images/background.svg"}
      bgPos={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      position={"relative"}
      {...props}
    >
      {children}
    </Flex>
  );
}
