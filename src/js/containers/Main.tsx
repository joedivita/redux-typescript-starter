import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import { MainView } from '../components/MainView';
import { IApplicationState } from '../modules/reducers';

interface IProps {
  children: Array<React.Component<any, any>>;
}

export class Main extends React.Component<IProps, any> {

  render(): JSX.Element {
    return (
      <MainView children={this.props.children} />
    );
  }
}

const mapStateToProps = (state: IApplicationState) => {
  return {

  };
};

export default connect(mapStateToProps)(Main);
