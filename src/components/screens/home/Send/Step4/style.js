import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: wp(100),
    paddingVertical: dw(30),
    paddingHorizontal: dw(20),
  },
  w2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  w3: {
    width: dw(34),
    height: dw(34),
    borderRadius: dw(34),
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  w4: {
    paddingHorizontal: dw(12),
  },
  w5: {
    flexDirection: 'row',
  },
  w6: {
    width: dw(2),
    height: dw(30),
    backgroundColor: '#C4C4C4',
    marginHorizontal: dw(17),
  },
  w7: {
    width: wp(100) - dw(30),
    height: dw(2),
    backgroundColor: 'white',
  },
  w8: {
    width: wp(100),
    paddingVertical: dw(30),
    paddingHorizontal: dw(15),
  },
  w9: {
    alignItems: 'flex-end',
  },
  w10: {
    width: wp(100),
    marginVertical: dw(15),
    paddingHorizontal: dw(15),
  },
  t1: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: dw(14),
    lineHeight: dw(16),
    color: 'white',
  },
  t2: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: dw(18),
    lineHeight: dw(27),
    color: 'white',
    paddingHorizontal: dw(8),
  },
  t3: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: dw(14),
    lineHeight: dw(21),
    color: 'rgba(255,255,255,0.6)',
  },
  t4: {
    flex: 1,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: dw(18),
    lineHeight: dw(21),
    color: 'white',
  },
  t5: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: dw(16),
    lineHeight: dw(24),
    color: 'white',
  },
  t6: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: dw(16),
    lineHeight: dw(24),
    color: '#A3A3A3',
  },
  t7: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: dw(14),
    lineHeight: dw(21),
    color: '#0099C9',
    textDecorationLine: 'underline',
  },
});

export default {base};
