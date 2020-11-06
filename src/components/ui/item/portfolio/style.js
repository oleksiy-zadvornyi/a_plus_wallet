import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: wp(100),
  },
  w2: {
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#232F4E',
    padding: dw(12),
  },
  w3: {
    width: dw(34),
    height: dw(34),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C4C4C4',
    borderRadius: dw(34),
  },
  w4: {
    flex: 1,
    paddingHorizontal: dw(12),
  },
  w5: {
    alignItems: 'flex-end',
  },
  w6: {
    height: dw(4),
  },
  t1: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(11),
    lineHeight: dw(13),
    color: 'white',
    padding: dw(6),
  },
  t2: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: dw(18),
    lineHeight: dw(27),
    color: 'white',
  },
  t3: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: dw(12),
    lineHeight: dw(18),
    color: 'white',
  },
  t4: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: dw(16),
    color: 'white',
  },
  t5: {
    color: '#009F06',
    lineHeight: dw(24),
  },
  t6: {
    color: '#A3A3A3',
    lineHeight: dw(24),
  },
});

export default {base};
