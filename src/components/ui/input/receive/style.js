import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    fontFamily: 'Roboto',
    fontSize: dw(14),
    fontWeight: '400',
    lineHeight: dw(16),
    color: 'white',
    backgroundColor: '#2F406D',
    borderRadius: dw(5),
    paddingVertical: dw(16),
    paddingHorizontal: dw(23),
  },
});

export default {base};
