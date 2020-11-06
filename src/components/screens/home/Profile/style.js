import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: wp(100),
    paddingHorizontal: dw(14),
  },
  w2: {
    height: dw(5),
  },
  t1: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: dw(14),
    lineHeight: dw(21),
    textAlign: 'center',
    color: 'white',
    paddingTop: dw(16),
  },
  t2: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: dw(18),
    lineHeight: dw(21),
    color: 'white',
    paddingTop: dw(16),
    paddingBottom: dw(6),
  },
});

export default {base};
