import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {},
  w2: {
    width: wp(100) - dw(40),
    marginVertical: dw(10),
  },
});

export default {base};
