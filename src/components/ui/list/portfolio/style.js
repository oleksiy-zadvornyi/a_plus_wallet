import {StyleSheet} from 'react-native';
// import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    alignItems: 'center',
    marginTop: dw(24),
  },
  t1: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: dw(14),
    lineHeight: dw(21),
    color: 'rgba(255,255,255,0.6)',
  },
});

export default {base};
