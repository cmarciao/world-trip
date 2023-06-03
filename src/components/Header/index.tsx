import { Flex, Icon, IconButton, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { IoIosArrowBack } from "react-icons/io";

export function Header() {
  const { back, asPath } = useRouter();

  return (
    <Flex
      maxWidth={1440}
      mx={"auto"}
      align={"center"}
      justify={"flex-start"}
      h={[16, 20, 24]}
      pos={"relative"}
    >
      {asPath !== '/' && (
        <IconButton
          aria-label="Back"
          background={"transparent"}
          _focus={{}}
          fontSize={28}
          icon={<IoIosArrowBack />}
          h={[5, 6, 8]}
          w={[5, 6, 8]}
          onClick={back}
          />
      )}
      
      <Img
        pos={"absolute"}
        height={[9, 10, 12]}
        src={"/images/logo.svg"}
        alt="Worldtrip"
        transform={"translateX(-40%)"}
        left={"50%"}
        />
    </Flex>
  );
}
