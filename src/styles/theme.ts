import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        gray: {
            "50": "#F5F8FA",
            "100": "#DADADA",
            "300": "#999999",
            "500": "#47585B",
            "950": "#1D1D1D"
        },
        orange: {
            "150": "#80FBA08",
            "500": "#FFBA08"
        }
    },
    fonts: {
        heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`
    },
    styles: {
        global: {
            body: {
                bg: "gray.50",
                color: "gray.500"
            }
        }
    }
})