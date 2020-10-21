import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function useDesignWidth(size) {
  return wp((100 / 414) * size);
}
