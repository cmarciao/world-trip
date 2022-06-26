import { useEffect, useState } from "react";
import { NextPage } from "next";

import {
  Box,
  Heading,
  Img,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { BoxContainer } from "../components/BoxContainer";

import { api } from "../services/api";

import { ContinentBanner } from "../types/ContinentBanner";

const Home: NextPage = () => {
  const [data, setData] = useState<ContinentBanner[]>([]);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isBaseVersion = useBreakpointValue({
    sm: true,
    base: false,
    lg: true,
  });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await api.get("/").then((response) => setData(response.data));
  }

  return (
    <Box pb={[6, 10]}>
      <Header />

      <Banner>
        <BoxContainer pt={20} pb={70} isMargin>
          <Heading
            fontWeight={"medium"}
            color={"gray.100"}
            fontSize={[28, 32, 36]}
          >
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text as="p" mt={5} color={"gray.100"} fontSize={[12, 16, 20]}>
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.
          </Text>

          {isWideVersion && (
            <Img
              src="/images/airplane.svg  "
              alt="Airplane"
              position={"absolute"}
              top={55}
              right={[0, 0, 0, 38, 140]}
              rotate={"3deg"}
            />
          )}
        </BoxContainer>
      </Banner>

      <BoxContainer isMargin>
        <SimpleGrid minChildWidth={158} pt={[65, 90, 114]} gap={7}>
          <TravelTypes
            image="/images/nigthlife.svg"
            title="vida noturna"
            isShowIcon={isBaseVersion}
          />
          <TravelTypes
            image="/images/beach.svg"
            title="praia"
            isShowIcon={isBaseVersion}
          />
          <TravelTypes
            image="/images/modern.svg"
            title="moderno"
            isShowIcon={isBaseVersion}
          />
          <TravelTypes
            image="/images/classic.svg"
            title="clássico"
            isShowIcon={isBaseVersion}
          />
          <TravelTypes
            image="/images/world.svg"
            title="e mais..."
            isShowIcon={isBaseVersion}
          />
        </SimpleGrid>
      </BoxContainer>

      <Box display={"flex"} justifyContent={"center"} mt={[9, 20]}>
        <Img src="/images/divider.svg" alt="Divider" />
      </Box>

      <Box textAlign={"center"} mt={[9, "3.25rem"]}>
        <Heading fontSize={[20, 36]} fontWeight={"medium"}>
          Vamos nessa?
        </Heading>
        <Heading fontSize={[20, 36]} fontWeight={"medium"}>
          Então escolha seu continente
        </Heading>
      </Box>

      <BoxContainer mt={[5, "3.25rem"]}>
        <Slider datas={data} />
      </BoxContainer>
    </Box>
  );
};

export default Home;
