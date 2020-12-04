import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  dot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: dw(10),
    height: dw(10),
    borderRadius: dw(10),
    backgroundColor: '#D8B9C3',
    borderColor: '#675F9B',
    borderWidth: dw(1),
  },
  w1: {
    borderBottomLeftRadius: dw(30),
    borderBottomRightRadius: dw(30),
    overflow: 'hidden',
  },
  w2: {
    width: wp(100),
    alignItems: 'center',
  },
  w3: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: dw(28),
  },
  w4: {
    alignItems: 'center',
    paddingBottom: dw(22),
    marginBottom: dw(36),
  },
  w5: {
    position: 'absolute',
    bottom: -dw(26),
    zIndex: 999,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: dw(8),
  },
  w6: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: dw(24),
  },
  w7: {
    paddingBottom: dw(52),
  },
  t1: {
    fontFamily: 'Poppins',
    fontSize: dw(14),
    fontWeight: '400',
    color: 'white',
    lineHeight: dw(21),
  },
  t2: {
    fontFamily: 'Poppins',
    fontSize: dw(20),
    fontWeight: '600',
    color: 'white',
    lineHeight: dw(30),
  },
  t3: {
    fontFamily: 'Poppins',
    fontSize: dw(20),
    fontWeight: '700',
    color: 'white',
  },
  t4: {
    fontFamily: 'Poppins',
    fontSize: dw(34),
    fontWeight: '700',
    color: 'white',
    lineHeight: dw(51),
  },
  t5: {
    fontFamily: 'Poppins',
    fontSize: dw(14),
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.6)',
  },
  t6: {
    fontFamily: 'Poppins',
    fontSize: dw(14),
    fontWeight: '600',
    color: '#363062',
    lineHeight: dw(22),
    paddingLeft: dw(16),
  },
});

export default {base};
