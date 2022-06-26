import { Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

interface CountryInfoItemProps {
  title: number | undefined;
  description: string;
}

export function CountryInfoItem({ title, description }: CountryInfoItemProps) {
  const isBaseVersion = useBreakpointValue({
    sm: true,
    base: false,
    lg: true,
  });

  return (
    <Box textAlign={isBaseVersion ? "center" : "left"}>
      <Heading
        fontWeight={"medium"}
        fontSize={[24, 36, 48]}
        color={"orange.500"}
      >
        {title}
      </Heading>
      <Text fontWeight={"medium"} fontSize={[18, 20, 24]} color={"gray.500"}>
        {description}
      </Text>
    </Box>
  );
}
