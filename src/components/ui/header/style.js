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
    alignItems: 'center',
    paddingHorizontal: dw(16),
    paddingVertical: dw(12),
  },
  t1: {
    fontFamily: 'Poppins',
    fontSize: dw(20),
    fontWeight: '600',
    color: 'white',
    lineHeight: dw(30),
  },
});

export default {base};
