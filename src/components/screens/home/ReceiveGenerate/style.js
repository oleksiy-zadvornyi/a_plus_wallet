import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: wp(100),
    paddingHorizontal: dw(14),
    paddingTop: dw(88),
  },
  w2: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: dw(25),
  },
  w3: {
    flex: 1,
    height: dw(54),
  },
  w4: {
    width: dw(6),
  },
  t1: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: dw(14),
    lineHeight: dw(21),
    color: 'white',
    padding: dw(22),
  },
});

export default {base};
