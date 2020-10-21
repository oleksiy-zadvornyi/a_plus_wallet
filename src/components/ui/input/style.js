import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import dw from "@hooks/useDesignWidth";

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flex: 1,
  },
  w2: {
    fontFamily: "Roboto",
    fontSize: dw(14),
    fontWeight: "400",
    lineHeight: dw(16),
    backgroundColor: "white",
    borderRadius: dw(5),
    padding: dw(22),
    color: "#BAC1CF",
  },
});

export default { base };
