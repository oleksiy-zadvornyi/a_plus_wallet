import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flex: 1,
    alignItems: 'center',
  },
  w2: {
    height: dw(4),
  },
  w3: {
    width: wp(100),
    height: dw(54),
    paddingHorizontal: dw(15),
    marginVertical: dw(15),
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
