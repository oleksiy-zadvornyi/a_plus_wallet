import React from 'react';
import {View, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// Style
import {base} from './styles';

export default function Wrap({children, titleView, noScroll, scroll, style}) {
  if (noScroll) {
    return (
      <View style={[base.flex, base.backgroundColor, style]}>
        <View style={base.wrap}>
          {titleView}
          {children}
        </View>
      </View>
    );
  }
  if (scroll) {
    return (
      <View style={[base.flex, base.backgroundColor, style]}>
        <View style={base.wrap}>
          {titleView}
          <ScrollView
            contentContainerStyle={base.wrap2}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            bounces={false}>
            {children}
          </ScrollView>
        </View>
      </View>
    );
  }

  return (
    <View style={[base.flex, base.backgroundColor, style]}>
      {titleView}
      <KeyboardAwareScrollView
        contentContainerStyle={base.wrap2}
        enableOnAndroid
        enableAutomaticScroll
        alwaysBounceVertical={false}
        bounces={false}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
}
