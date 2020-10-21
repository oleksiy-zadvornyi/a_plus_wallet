import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import dw from "@hooks/useDesignWidth";

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flex: 1,
    alignItems: "center",
    borderRadius: dw(5),
  },
  t1: {
    fontFamily: "Roboto",
    fontSize: dw(18),
    fontWeight: "700",
    lineHeight: dw(21),
    padding: dw(16),
    color: "white",
  },
});

export default { base };
