import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default {

  baseMargin: 20,
  mediumMargin: 18,
  smallMargin: 15,

  baseRadius: 5,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

};
