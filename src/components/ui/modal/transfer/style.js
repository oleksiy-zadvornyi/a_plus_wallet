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
    width: wp(100),
    backgroundColor: 'white',
    borderRadius: dw(10),
    paddingVertical: dw(14),
    alignItems: 'center',
  },
  w3: {
    flexDirection: 'row',
    width: wp(100) - dw(14),
    height: dw(45),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: dw(4),
  },
  w4: {
    width: dw(40),
    height: dw(40),
    borderRadius: dw(40),
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  t1: {
    flex: 1,
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: dw(24),
    lineHeight: dw(28),
    color: '#5A5A5A',
    paddingLeft: dw(16),
  },
});

export default {base};
