import * as React from 'react';
import { Dropdown } from 'antd';

interface IProps {
  letter: string;
  menu: JSX.Element;
}

class UserCircle extends React.Component<IProps, any> {
  render(): JSX.Element {
    return (
      <div className='user-circle float-right'>
        <Dropdown
          overlay={this.props.menu}
          trigger={['click']}
          getPopupContainer={
            () => document.getElementById('user-circle-dropdown')
          }
         >
          <a className='ant-dropdown-link'>
            <div className='user-circle-background'>
              <p>{this.props.letter}</p>
            </div>
          </a>
        </Dropdown>
        <div id='user-circle-dropdown'></div>
      </div>
    );
  }
}

export { UserCircle };
