import React from 'react';
import {View, Text} from 'react-native';
import i18n from 'i18n-js';

// Components
import Wrap from 'base/Wrap';
import Header from 'header';
import Button from 'button';

import {base} from './style';

export default function Services({showToast}) {
  return (
    <Wrap noScroll titleView={<Header title={i18n.t('t97')} />}>
      <View style={base.w1}>
        <Button
          style={base.w2}
          contentContainerStyle={base.w3}
          title={i18n.t('t98')}
          color="#232F4E"
          onPress={() =>
            showToast(<Text style={base.t1}>{i18n.t('t101')}</Text>)
          }
        />
        <Button
          style={base.w2}
          contentContainerStyle={base.w3}
          title={i18n.t('t99')}
          color="#232F4E"
          onPress={() =>
            showToast(<Text style={base.t1}>{i18n.t('t101')}</Text>)
          }
        />
        <Button
          style={base.w2}
          contentContainerStyle={base.w3}
          title={i18n.t('t100')}
          color="#232F4E"
          onPress={() =>
            showToast(<Text style={base.t1}>{i18n.t('t101')}</Text>)
          }
        />
      </View>

      <View style={base.flex} />
      <View style={base.w4}>
        <Text style={base.t1}>{i18n.t('t101')}</Text>
      </View>
      <View style={base.flex} />
    </Wrap>
  );
}
