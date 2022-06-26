import { Flex, Icon, IconButton, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { IoIosArrowBack } from "react-icons/io";

interface HeaderProps {
  backUrl?: string;
}

export function Header({ backUrl }: HeaderProps) {
  const { push } = useRouter();

  return (
    <Flex
      maxWidth={1440}
      mx={"auto"}
      align={"center"}
      justify={"center"}
      h={[16, 20, 24]}
      pos={"relative"}
    >
      {!!backUrl && (
        <IconButton
          aria-label="Back"
          background={"transparent"}
          _focus={{}}
          fontSize={28}
          icon={<IoIosArrowBack />}
          h={[5, 6, 8]}
          w={[5, 6, 8]}
          pos={"absolute"}
          left={[12, 20, 36]}
          top={"35%"}
          onClick={() => push("/")}
        />
      )}
      <Img src={"/images/logo.svg"} alt="Worldtrip" height={[9, 10, 12]} />
    </Flex>
  );
}
