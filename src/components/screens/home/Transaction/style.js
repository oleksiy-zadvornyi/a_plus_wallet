import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flex: 1,
    width: wp(100),
    paddingTop: dw(22),
    paddingLeft: dw(16),
    paddingRight: dw(8),
  },
  w2: {
    width: wp(100),
    paddingHorizontal: dw(8),
    paddingTop: dw(8),
    paddingBottom: dw(16),
    backgroundColor: '#232F4E',
  },
  t1: {
    fontFamily: 'Roboto',
    fontSize: dw(12),
    fontWeight: '400',
    color: 'white',
    lineHeight: dw(14),
    marginTop: dw(19),
  },
  t2: {
    fontFamily: 'Poppins',
    fontSize: dw(18),
    fontWeight: '500',
    color: 'rgba(255,255,255,0.6)',
    lineHeight: dw(27),
  },
  t3: {
    fontFamily: 'Poppins',
    fontSize: dw(14),
    fontWeight: '500',
    color: 'rgba(255,255,255,0.6)',
    lineHeight: dw(21),
  },
});

export default {base};
