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
    flex: 1,
    paddingHorizontal: dw(12),
  },
  w3: {
    alignItems: 'flex-end',
  },
  w4: {
    backgroundColor: '#1B48BC',
  },
  t1: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: dw(18),
    lineHeight: dw(27),
    color: 'white',
  },
  t2: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: dw(12),
    lineHeight: dw(18),
    color: 'white',
  },
  t3: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: dw(16),
    color: 'white',
  },
  t4: {
    color: '#A3A3A3',
    lineHeight: dw(24),
  },
});

export default {base};
