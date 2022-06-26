import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";

interface CityItemProps {
  name: string;
  cityImgUrl: string;
  country: string;
  countryImgUrl: string;
}

export function CityItem({
  name,
  cityImgUrl,
  country,
  countryImgUrl,
}: CityItemProps) {
  return (
    <Box
      maxW={256}
      w={"100%"}
      mx={"auto"}
      borderRadius={4}
      border={"1px solid"}
      borderColor="orange.500"
      pb={25}
    >
      <Img
        h={173}
        width={"100%"}
        maxHeight={"173px"}
        borderRadius={"4 4 0 0"}
        overflow={"hidden"}
        src={cityImgUrl}
      />
      <Box>
        <Flex alignItems={"center"} justifyContent={"space-around"}>
          <Box>
            <Heading pt={18} fontSize={20} fontWeight="semibold">
              {name}
            </Heading>
            <Text pt={"0.75rem"} color={"gray.300"}>
              {country}
            </Text>
          </Box>

          <Img
            w={30}
            h={30}
            border={"1px solid #ddd"}
            borderRadius={15}
            src={countryImgUrl}
          />
        </Flex>
      </Box>
    </Box>
  );
}
