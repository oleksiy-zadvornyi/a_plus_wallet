import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dw(26),
    paddingVertical: dw(47),
  },
  w2: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: dw(36),
    fontWeight: '700',
    lineHeight: dw(42),
    color: 'white',
    paddingHorizontal: dw(11),
  },
  t1: {
    fontFamily: 'Roboto',
    fontSize: dw(36),
    fontWeight: '700',
    lineHeight: dw(42),
    color: 'white',
  },
});

export default {base};
