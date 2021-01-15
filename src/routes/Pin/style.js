import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: wp(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // paddingTop: dw(60),
  },
  w2: {
    width: dw(40),
    height: dw(40),
    borderRadius: dw(40),
    borderWidth: 1,
    borderColor: '#232F4E',
  },
  w3: {
    width: dw(40),
    height: dw(40),
    borderRadius: dw(40),
    backgroundColor: '#009F06',
  },
  w4: {
    width: wp(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: dw(20),
  },
  w5: {
    width: dw(45),
    height: dw(45),
    borderRadius: dw(45),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#232F4E',
  },
  w6: {
    width: dw(45),
    height: dw(45),
  },
  w7: {
    width: wp(80),
  },
  t1: {
    width: wp(90),
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: dw(14),
    lineHeight: dw(21),
    color: 'white',
    textAlign: 'center',
  },
  t2: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: dw(30),
    color: 'white',
  },
  t3: {
    fontFamily: 'Roboto',
    fontWeight: '100',
    fontSize: dw(35),
    color: 'white',
  },
});

export default {base};
