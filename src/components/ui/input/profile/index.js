import React from 'react';
import {TextInput, View} from 'react-native';
import Button from 'button';

import {base} from './style';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        value: this.props.value,
      });
    }
  }

  onChangeText = (value) => this.setState({value});

  onChange = () => {
    const {value, onSubmitEditing} = this.props;
    if (value !== this.state.value) {
      if (onSubmitEditing) {
        onSubmitEditing(this.state.value);
      }
    }
  };

  focus = () => this.input.focus();

  ref = (r) => (this.input = r);

  getValue = () => {
    return this.state.value;
  };

  clear = () => {
    this.setState({value: ''});
  };

  render() {
    const {value} = this.state;
    const {
      style,
      editable,
      placeholder,
      keyboardType,
      autoCapitalize,
      secureTextEntry,
      button,
      buttonTitle,
      buttonPress,
    } = this.props;

    return (
      <View style={[base.w1, style]}>
        <TextInput
          ref={this.ref}
          style={base.w2}
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor="#BAC1CF"
          keyboardType={keyboardType || 'default'}
          returnKeyType="done"
          autoCapitalize={autoCapitalize || 'sentences'}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onChange}
        />
        {button && (
          <Button
            contentContainerStyle={base.w3}
            titleStyle={base.t1}
            title={buttonTitle}
            onPress={buttonPress}
          />
        )}
      </View>
    );
  }
}
