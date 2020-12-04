import React from 'react';
import {TextInput} from 'react-native';

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
      value,
      placeholder,
      keyboardType,
      returnKeyType,
      autoCapitalize,
      secureTextEntry,
      onSubmitEditing,
    } = this.props;

    return (
      <TextInput
        ref={this.ref}
        style={base.w1}
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
    );
  }
}
