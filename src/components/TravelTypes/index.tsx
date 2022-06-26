import { Box, Img, Stack, Text } from "@chakra-ui/react";

interface TravelTypesProps {
  image: string;
  title: string;
  isShowIcon?: boolean;
}

export function TravelTypes({
  image,
  title,
  isShowIcon = true,
}: TravelTypesProps) {
  return (
    <Box textAlign={"center"}>
      {isShowIcon && (
        <Img
          src={image}
          alt={title}
          width={85}
          height={85}
          display={"inline-block"}
        />
      )}
      <Stack
        mt={6}
        spacing={2}
        justify={"center"}
        align={"center"}
        direction={"row"}
      >
        {!isShowIcon && (
          <Img src="/images/ellipse.svg" alt={"Ellipse"} height={2} width={2} />
        )}
        <Text textAlign={"center"} fontWeight={"semibold"}>
          {title}
        </Text>
      </Stack>
    </Box>
  );
}
