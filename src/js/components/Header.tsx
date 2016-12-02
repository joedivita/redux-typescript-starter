import * as React from 'react';
import { Menu, Row, Col, Icon, Input } from 'antd';
import { UserCircle } from './UserCircle';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

interface IProps {}

class Header extends React.Component<IProps, any> {
  userMenu(): JSX.Element {
    return (
      <Menu>
        <Menu.Item key='0'>
          <a href='#'>
            <Icon type={'user'} /> Your Profile
          </a>
        </Menu.Item>
        <Menu.Item key='1'>
          <a href='#'>
            <Icon type={'setting'} /> Settings
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key='3'>
          <a href='#'>
            <Icon type={'poweroff'} /> Log Out
          </a>
        </Menu.Item>
      </Menu>
    );
  }

  render(): JSX.Element {
    return (
      <div className='header'>
        <Row>
          <Col xs={{ span: 24 }} md={{ span: 0 }}>
            <p className='text-center logo'>Logo</p>
          </Col>
          <Col xs={{ span: 0 }} md={{ span: 6 }}>
          </Col>
          <Col xs={{ span: 0 }} md={{ span: 12 }}>
            <Input.Search placeholder='Search for anything...' />
          </Col>
          <Col xs={{ span: 0 }} md={{ span: 6 }}>
            <UserCircle letter={'J'} menu={this.userMenu()} />
          </Col>
        </Row>
      </div>
    );
  }
}

export { Header };
