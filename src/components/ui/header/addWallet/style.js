import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: wp(100),
    alignItems: 'center',
  },
  w2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dw(8),
  },
  w3: {
    width: dw(40),
    height: dw(40),
    borderRadius: dw(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  w4: {
    flex: 1,
    alignItems: 'center',
  },
  t1: {
    fontFamily: 'Roboto',
    fontSize: dw(11),
    fontWeight: '400',
    color: 'white',
    lineHeight: dw(13),
  },
  t2: {
    fontFamily: 'Roboto',
    fontSize: dw(12),
    fontWeight: '700',
    color: 'white',
    lineHeight: dw(14),
    paddingVertical: dw(5),
  },
});

export default {base};
