import React from 'react';
import {TextInput, View} from 'react-native';

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
    const {value} = this.state;
    const {
      style,
      placeholder,
      keyboardType,
      returnKeyType,
      autoCapitalize,
      secureTextEntry,
      textContentType,
      onSubmitEditing,
    } = this.props;

    return (
      <View style={style}>
        <TextInput
          ref={this.ref}
          style={base.w2}
          placeholder={placeholder}
          placeholderTextColor="#343842"
          keyboardType={keyboardType || 'default'}
          returnKeyType={returnKeyType || 'done'}
          autoCapitalize={autoCapitalize || 'sentences'}
          secureTextEntry={secureTextEntry}
          passwordRules={
            secureTextEntry &&
            'required: lower; required: upper; required: digit; required: [-]; minlength: 1;'
          }
          textContentType={textContentType || 'none'}
          value={value}
          onChangeText={this.onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    );
  }
}
