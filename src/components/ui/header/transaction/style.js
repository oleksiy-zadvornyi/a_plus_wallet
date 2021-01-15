import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: wp(100),
    alignItems: 'center',
  },
  w2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dw(8),
    paddingTop: dw(8),
  },
  w3: {
    width: dw(40),
    height: dw(40),
    borderRadius: dw(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  w4: {
    flex: 1,
    alignItems: 'center',
  },
  w5: {
    width: dw(40),
    height: dw(40),
    borderRadius: dw(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C4C4C4',
    marginVertical: dw(5),
  },
  w6: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: dw(10),
  },
  w7: {
    width: dw(5),
    height: dw(5),
    borderRadius: dw(5),
    backgroundColor: '#009F06',
    marginRight: dw(3),
  },
  t1: {
    fontFamily: 'Roboto',
    fontSize: dw(11),
    fontWeight: '400',
    color: 'white',
    lineHeight: dw(13),
  },
  t2: {
    fontFamily: 'Roboto',
    fontSize: dw(12),
    fontWeight: '700',
    color: 'white',
    lineHeight: dw(14),
    paddingVertical: dw(5),
  },
  t3: {
    fontFamily: 'Poppins',
    fontSize: dw(18),
    fontWeight: '600',
    color: 'white',
    lineHeight: dw(27),
  },
  t4: {
    fontFamily: 'Poppins',
    fontSize: dw(13),
    fontWeight: '600',
    color: '#A3A3A3',
    lineHeight: dw(19),
  },
  t5: {
    fontFamily: 'Roboto',
    fontSize: dw(14),
    fontWeight: '700',
    color: '#009F06',
    lineHeight: dw(16),
  },
});

export default {base};
