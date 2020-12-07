import React from 'react';
import {TextInput, View} from 'react-native';
import Image from 'react-native-scalable-image';
import dw from 'hooks/useDesignWidth';
import i18n from 'i18n-js';

// Helpers
import * as Images from 'helpers/images';

import {base} from './style';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onChangeText = (value) => {
    this.setState({value});
    this.props.onChangeText(value);
  };

  focus = () => this.input.focus();

  ref = (r) => (this.input = r);

  getValue() {
    return this.state.value;
  }

  render() {
    const {value} = this.state;
    const {style, onSubmitEditing} = this.props;

    return (
      <View style={[base.w1, style]}>
        <Image source={Images.finder} width={dw(23)} />
        <TextInput
          ref={this.ref}
          style={base.w2}
          placeholder={i18n.t('t76')}
          placeholderTextColor="white"
          returnKeyType="search"
          value={value}
          onChangeText={this.onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    );
  }
}
