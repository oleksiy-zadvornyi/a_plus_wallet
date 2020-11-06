import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: wp(100) - dw(30),
    height: dw(2),
    backgroundColor: '#C4C4C4',
  },
  w2: {
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dw(15),
  },
  w3: {
    flex: 1,
  },
  w4: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  w5: {
    width: wp(100),
    marginVertical: dw(15),
    paddingHorizontal: dw(15),
  },
  t1: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: dw(18),
    lineHeight: dw(21),
    color: 'white',
  },
  t2: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: dw(24),
    lineHeight: dw(36),
    color: 'white',
  },
  t3: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(18),
    lineHeight: dw(21),
    color: 'white',
    paddingRight: dw(10),
  },
});

export default {base};
