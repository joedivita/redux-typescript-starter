import * as React from 'react';
import { Header } from './Header';
import { Aside } from './Aside';

interface IProps {
  children: Array<React.Component<any, any>>;
}

class MainView extends React.Component<IProps, any> {

  render(): JSX.Element {
    return (
      <div>
        <Header />
        <Aside />
        <div className='main-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export { MainView };
