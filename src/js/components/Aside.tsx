import * as React from 'react';
import { Menu, Icon, Badge, Tooltip } from 'antd';

interface IProps {}

class Aside extends React.Component<IProps, any> {
  render(): JSX.Element {
    return (
      <div className='aside'>
        <Menu mode='inline' style={{ width: 70 }}>
          <Menu.Item key='sub0'>
            <span className='logo'><Icon type='chrome'/></span>
          </Menu.Item>
          <Menu.Item key='sub1'>
            <Tooltip placement='right' title={'Dashboard'}>
              <span><Icon type='appstore-o'/></span>
            </Tooltip>
          </Menu.Item>
          <Menu.Item key='sub2'>
            <Tooltip placement='right' title={'Folders'}>
              <span><Icon type='folder'/></span>
            </Tooltip>
          </Menu.Item>
          <Menu.Item key='sub3'>
            <Tooltip placement='right' title={'Query'}>
              <span><Icon type='code-o'/></span>
            </Tooltip>
          </Menu.Item>
          <Menu.Item key='sub4'>
            <Tooltip placement='right' title={'Reports'}>
              <span><Icon type='line-chart'/></span>
            </Tooltip>
          </Menu.Item>
          <Menu.Item key='sub5'>
            <Tooltip placement='right' title={'Notifications'}>
              <span>
                <Icon type='message'/>
              </span>
            </Tooltip>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export { Aside };
