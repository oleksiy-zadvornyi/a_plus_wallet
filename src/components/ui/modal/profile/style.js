import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    alignItems: 'center',
  },
  w2: {
    width: wp(100) - dw(60),
    backgroundColor: '#141D33',
    borderRadius: dw(5),
    borderColor: 'white',
    borderWidth: dw(1),
    alignItems: 'center',
    padding: dw(14),
  },
  w3: {
    flex: 0,
    marginVertical: dw(4),
  },
  w4: {
    width: wp(100) - dw(92),
  },
  t1: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(18),
    lineHeight: dw(21),
    color: '#BEBEBE',
    paddingBottom: dw(7),
  },
});

export default {base};
