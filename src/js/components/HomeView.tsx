import * as React from 'react';
import { List } from 'immutable';
import { Button } from 'antd';

interface IProps {}

class HomeView extends React.Component<IProps, any> {

  render(): JSX.Element {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export { HomeView };
