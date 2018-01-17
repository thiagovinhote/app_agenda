import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get('window');

export default {

  bigMargin: 30,
  baseMargin: 20,
  mediumMargin: 18,
  smallMargin: 15,
  miniMargin: 10,
  tinyMargin: 5,

  baseRadius: 5,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: 62,
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,

};
