import React from 'react';
import i18n from 'i18n-js';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/send';
import List from 'list/send/step1';

// Style
import {base} from './style';

export default function Step1() {
  return (
    <Wrap noScroll titleView={<Header step={1} title={i18n.t('t36')} />}>
      <List />
    </Wrap>
  );
}
