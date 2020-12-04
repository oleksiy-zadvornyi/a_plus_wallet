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
  },
  w3: {
    width: wp(100) - dw(60),
    flexDirection: 'row',
    paddingTop: dw(20),
    paddingBottom: dw(35),
    paddingHorizontal: dw(16),
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: dw(1),
  },
  w4: {
    width: dw(30),
  },
  w5: {
    width: wp(100) - dw(60),
    flexDirection: 'row',
    paddingBottom: dw(17),
    paddingTop: dw(13),
    paddingHorizontal: dw(16),
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: dw(1),
    alignItems: 'center',
  },
  w6: {
    height: dw(160),
  },
  t1: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(18),
    lineHeight: dw(21),
    color: '#BEBEBE',
  },
  t2: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(12),
    lineHeight: dw(14),
    color: '#BEBEBE',
    paddingTop: dw(6),
  },
});

export default {base};
