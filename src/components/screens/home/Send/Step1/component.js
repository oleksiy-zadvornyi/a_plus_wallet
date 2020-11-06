import React from 'react';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/send';
import List from 'list/send/step1';

// Style
import {base} from './style';

export default function Step1() {
  return (
    <Wrap
      noScroll
      titleView={<Header step={1} title="Выбор кошелька для отправки" />}>
      <List />
    </Wrap>
  );
}
