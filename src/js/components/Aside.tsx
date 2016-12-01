import * as React from 'react';
import { Menu, Icon, Badge } from 'antd';

interface IProps {}

class Aside extends React.Component<IProps, any> {
  render(): JSX.Element {
    return (
      <div className='aside'>
        <h4>Navigation</h4>
        <Menu mode='inline' style={{ width: 190 }}>
          <Menu.Item key='sub1'>
            <span><Icon type='appstore-o'/><span> Dashboard</span></span>
          </Menu.Item>
          <Menu.Item key='sub2'>
            <span><Icon type='folder'/><span> Folders</span></span>
          </Menu.Item>
          <Menu.Item key='sub3'>
            <span><Icon type='code-o'/><span> Query</span></span>
          </Menu.Item>
          <Menu.Item key='sub4'>
            <span><Icon type='line-chart'/><span> Reports</span></span>
          </Menu.Item>
          <Menu.Item key='sub5'>
            <span>
              <Icon type='message'/><span> Notifications </span>
              <Badge count={5000}></Badge>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export { Aside };
