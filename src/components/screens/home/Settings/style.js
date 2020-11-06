import {StyleSheet} from 'react-native';
// import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    marginTop: dw(31),
  },
  w2: {
    height: dw(3),
  },
  w3: {
    height: dw(9),
  },
  t1: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(18),
    lineHeight: dw(21),
    color: 'white',
    paddingHorizontal: dw(14),
    paddingTop: dw(17),
    paddingBottom: dw(6),
    alignSelf: 'flex-start',
  },
});

export default {base};
