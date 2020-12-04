import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: dw(16),
    marginBottom: dw(4),
  },
  w2: {
    width: wp(100) - dw(30),
    height: dw(40),
  },
  t1: {
    fontFamily: 'Roboto',
    fontSize: dw(18),
    fontWeight: '700',
    color: 'black',
  },
});

export default {base};
