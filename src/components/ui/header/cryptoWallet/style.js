import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    borderBottomLeftRadius: dw(30),
    borderBottomRightRadius: dw(30),
    overflow: 'hidden',
  },
  w2: {
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: dw(21),
    paddingVertical: dw(12),
  },
  w3: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  w4: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  w5: {
    alignItems: 'center',
  },
  w6: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  t1: {
    fontFamily: 'Poppins',
    fontSize: dw(18),
    fontWeight: '600',
    color: 'white',
    lineHeight: dw(27),
    paddingHorizontal: dw(8),
  },
  t2: {
    fontFamily: 'Poppins',
    fontSize: dw(30),
    fontWeight: '600',
    color: 'white',
    lineHeight: dw(45),
  },
  t3: {
    fontFamily: 'Poppins',
    fontSize: dw(24),
    fontWeight: '600',
    color: '#A3A3A3',
  },
});

export default {base};
