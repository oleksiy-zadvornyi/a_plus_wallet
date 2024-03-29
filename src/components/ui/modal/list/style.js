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
    overflow: 'hidden',
  },
  w3: {
    width: wp(100) - dw(62),
    alignItems: 'center',
    paddingVertical: dw(8),
  },
  w4: {
    backgroundColor: '#009F06',
  },
  t1: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(24),
    lineHeight: dw(28),
    color: 'white',
  },
});

export default {base};
