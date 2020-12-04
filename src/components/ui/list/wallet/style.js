import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    paddingTop: dw(31),
  },
  w2: {
    height: dw(4),
  },
});

export default {base};
