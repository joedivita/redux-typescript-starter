import * as React from 'react';
import { Header } from './Header';
import { Aside } from './Aside';
import { Row, Col } from 'antd';

interface IProps {}

class MainView extends React.Component<IProps, any> {

  render(): JSX.Element {
    return (
      <div>
        <Header />
        <Row>
          <Col xs={{ span: 0 }} md={{ span: 6 }}>
            <Aside />
          </Col>
        </Row>
      </div>
    );
  }
}

export { MainView };
