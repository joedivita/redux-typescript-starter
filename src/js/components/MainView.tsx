import * as React from 'react';
import { List } from 'immutable';
import { Button } from 'antd';
import { Header } from './Header';

interface IProps {}

class MainView extends React.Component<IProps, any> {

  render(): JSX.Element {
    return (
      <Header />
    );
  }
}

export { MainView };
