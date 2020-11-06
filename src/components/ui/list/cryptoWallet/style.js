import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dw(3),
  },
});

export default {base};
