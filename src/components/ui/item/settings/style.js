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
    backgroundColor: '#232F4E',
    padding: dw(12),
  },
  w2: {
    width: dw(70),
    alignItems: 'center',
  },
  w3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  w4: {
    width: dw(32),
    alignItems: 'center',
  },
  w5: {
    backgroundColor: '#141D33',
  },
  t1: {
    flex: 1,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(18),
    lineHeight: dw(21),
    color: 'white',
    paddingHorizontal: dw(19),
  },
  t2: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: dw(18),
    lineHeight: dw(21),
    color: 'white',
  },
  t3: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: dw(18),
    lineHeight: dw(21),
    color: 'white',
    paddingHorizontal: dw(7),
  },
});

export default {base};
