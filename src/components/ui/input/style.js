import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flex: 1,
  },
  w2: {
    height: dw(61),
    fontFamily: 'Roboto',
    fontSize: dw(14),
    fontWeight: '400',
    lineHeight: dw(16),
    backgroundColor: 'white',
    borderRadius: dw(5),
    paddingHorizontal: dw(22),
    color: '#343842',
  },
});

export default {base};
