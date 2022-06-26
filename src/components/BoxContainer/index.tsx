import { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface BoxContainerProps extends BoxProps {
  isMargin?: boolean;
  children: ReactNode;
}

export function BoxContainer({
  children,
  isMargin = false,
  ...props
}: BoxContainerProps) {
  return (
    <Box
      w={"100%"}
      maxWidth={1160}
      mx={"auto"}
      px={isMargin ? [2, 2, 2, 2, 0] : 0}
      {...props}
    >
      {children}
    </Box>
  );
}
