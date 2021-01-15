import React from 'react';
import {View, TextInput} from 'react-native';
import Image from 'react-native-scalable-image';

// Helpers
import * as Images from 'helpers/images';
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
    };
  }

  onChangeText = (value) => this.setState({value});

  focus = () => this.input.focus();

  ref = (r) => (this.input = r);

  getValue() {
    return this.state.value;
  }

  render() {
    const {
      style,
      value,
      placeholder,
      keyboardType,
      returnKeyType,
      autoCapitalize,
      secureTextEntry,
      onSubmitEditing,
      onPressCopy,
    } = this.props;

    return (
      <View style={[base.w1, style]}>
        <TextInput
          ref={this.ref}
          style={base.w2}
          editable={false}
          placeholder={placeholder}
          placeholderTextColor="#BAC1CF"
          keyboardType={keyboardType || 'default'}
          returnKeyType={returnKeyType || 'done'}
          autoCapitalize={autoCapitalize || 'sentences'}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={this.onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <Image source={Images.copy} width={dw(23)} onPress={onPressCopy} />
      </View>
    );
  }
}
