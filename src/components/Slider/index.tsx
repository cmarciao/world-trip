import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Box, Heading, Text } from "@chakra-ui/react";
import { ContinentBanner } from "../../types/ContinentBanner";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface SliderProps {
  datas: ContinentBanner[];
}

export function Slider({ datas }: SliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation      
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {datas.map((data) => {
        return (
          <SwiperSlide key={data.title}>
            <Link href={data.endpoint}>
              <Box
                cursor={"pointer"}
                display={"flex"}
                flexDirection={"column"}
                alignItems="center"
                justifyContent={"center"}
                bgImage={data.urlBackground}
                bgRepeat={"no-repeat"}
                bgPos={"center"}
                bgSize={"cover"}
                textAlign={"center"}
                w={"100%"}
                h={450}
                color={"gray.100"}
              >
                <Heading fontSize={["3xl", "5xl"]}>{data.title}</Heading>
                <Text as="h2" fontSize={["lg", "2xl"]} mt={4}>
                  {data.description}
                </Text>
              </Box>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
