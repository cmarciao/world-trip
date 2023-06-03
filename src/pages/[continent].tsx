import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Banner } from "../components/Banner";
import { BoxContainer } from "../components/BoxContainer";
import { CityItem } from "../components/CityItem";
import { CountryInfoItem } from "../components/CountryInfoItem";
import { Header } from "../components/Header";

import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { api } from "../services/api";

import { Continent as ContinentType } from "../types/Continent";

export default function Continent() {
  const router = useRouter();
  const { continent: continentRoute } = router.query;

  const [continent, setContinent] = useState<ContinentType>();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    loadData();
  }, [router.query]);

  async function loadData() {
    if (continentRoute !== undefined) {
      await api
        .get(`continents/${continentRoute}`)
        .then((response) => setContinent(response.data));
    }
  }

  return (
    <Box>
      <Header />

      <Banner
        maxWidth={1440}
        flexDirection={"column"}
        justifyContent={"flex-end"}
        bgImage={continent?.continentImgUrl}
        height={[500, 450, 375]}
        pb={59}
        pl={[8]}
        mx={"auto"}
      >
        <BoxContainer isMargin>
          <Heading color={"gray.50"}>{continent?.name}</Heading>
        </BoxContainer>
      </Banner>

      <BoxContainer pt={[4, 20]} pb={70}>
        <Flex flexDirection={!isWideVersion ? "column" : "row"}>
          <Box flex={1}>
            <Text
              color={"gray.500"}
              fontSize={[14, 18, 24]}
              px={isWideVersion ? 2 : 4}
            >
              {continent?.description}
            </Text>
          </Box>

          <Flex
            mt={!isWideVersion ? "16" : "0"}
            flex={1}
            justify={"center"}
            px={isWideVersion ? 2 : 4}
            align={"center"}
            gap={[34, 38, 42]}
          >
            <CountryInfoItem
              title={continent?.info.quantityCountries}
              description="países"
            />
            <CountryInfoItem
              title={continent?.info.quantityLanguages}
              description="línguas"
            />
            <CountryInfoItem
              title={continent?.info.quantityCities}
              description="cidade +100"
            />
          </Flex>
        </Flex>

        <Box>
          <Heading
            fontWeight={"medium"}
            color={"gray.500"}
            mt={20}
            px={isWideVersion ? 0 : 4}
          >
            Cidades +100
          </Heading>

          <SimpleGrid pt={10} gap={[5, 45]} columns={[1, 2, 3, 4]} px={2}>
            {continent?.cities.map((city) => (
              <CityItem
                key={city.name}
                name={city.name}
                country={city.country}
                cityImgUrl={city.cityImgUrl}
                countryImgUrl={city.countryImgUrl}
              />
            ))}
          </SimpleGrid>
        </Box>
      </BoxContainer>
    </Box>
  );
}
