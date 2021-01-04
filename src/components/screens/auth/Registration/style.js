import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    alignItems: 'center',
  },
  w2: {
    width: wp(100),
    paddingHorizontal: dw(14),
    marginTop: dw(38),
  },
  w3: {
    // paddingTop: dw(20),
  },
  w4: {
    width: wp(100),
    alignItems: 'center',
    paddingHorizontal: dw(14),
    paddingVertical: dw(20),
  },
  t1: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: dw(14),
    lineHeight: dw(21),
    color: 'white',
    paddingTop: dw(16),
  },
  t2: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(14),
    lineHeight: dw(16),
    color: 'white',
    textAlign: 'center',
  },
  t3: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(14),
    lineHeight: dw(16),
    color: 'white',
    textDecorationLine: 'underline',
  },
});

export default {base};
