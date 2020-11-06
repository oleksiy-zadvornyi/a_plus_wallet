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
    backgroundColor: 'white',
  },
  w2: {
    width: wp(100),
    marginVertical: dw(52),
    paddingHorizontal: dw(15),
  },
  w3: {
    width: wp(100),
    marginVertical: dw(15),
    paddingHorizontal: dw(15),
  },
  t1: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: dw(18),
    lineHeight: dw(21),
    color: 'white',
    paddingVertical: dw(41),
  },
});

export default {base};
