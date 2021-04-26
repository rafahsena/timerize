import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = {
  styles,
  config
};

export default extendTheme(theme);