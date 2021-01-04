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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: dw(4),
    paddingVertical: dw(4),
  },
  w4: {
    backgroundColor: '#C4C4C4',
    paddingRight: dw(15),
  },
  w5: {
    width: wp(100) - dw(14),
    marginTop: dw(7),
  },
  t1: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: dw(18),
    lineHeight: dw(21),
    color: 'black',
    paddingBottom: dw(8),
  },
  t2: {
    flex: 1,
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: dw(22),
    lineHeight: dw(28),
    color: '#5A5A5A',
  },
});

export default {base};
