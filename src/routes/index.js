import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import Auth from './Auth';
import Home from './Home';
import Preloader from './Preloader';
import Pin from './Pin';
import LocalPin from './LocalPin';

import {locales} from 'helpers/locales';
import ru from 'helpers/locales/ru';
import en from 'helpers/locales/en';
import it from 'helpers/locales/it';
import sk from 'helpers/locales/sk';
import fr from 'helpers/locales/fr';
i18n.translations = {
  ru,
  en,
  it,
  sk,
  fr,
};

import {reduceLocale} from 'actions/settings';

class Route extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preloader: false,
    };
  }

  componentDidMount() {
    const {locale, setLocale} = this.props;
    let loc = 'en';
    if (locales.find((e) => Localization.locale.startsWith(e))) {
      loc = Localization.locale.split('-')[0];
    }
    if (locale.length > 0) {
      loc = locale;
    }
    if (loc !== locale) {
      setLocale(loc);
    }

    i18n.locale = loc;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      i18n.locale = this.props.locale;
      this.forceUpdate();
    }
  }

  render() {
    const {preloader} = this.state;
    const {access_token, pin, usePin, locale} = this.props;

    if (!preloader) {
      return <Preloader onPreloader={() => this.setState({preloader: true})} />;
    }
    if (access_token) {
      if (pin.length === 0) {
        return <Pin />;
      }
      if (!usePin) {
        return <LocalPin />;
      }
      return <Home key={locale} />;
    }
    return <Auth />;
  }
}

function mapStateToProps(state) {
  return {
    access_token: state.user.access_token,
    pin: state.user.pin,
    usePin: state.pin,
    locale: state.settings.locale,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLocale: (data) => dispatch(reduceLocale(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Route);
