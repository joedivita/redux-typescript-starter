import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import { HomeView } from '../components/HomeView';
import { IApplicationState } from '../modules/reducers';

interface IProps {}

export class Home extends React.Component<IProps, any> {

  render(): JSX.Element {
    return (
      <HomeView />
    );
  }
}

const mapStateToProps = (state: IApplicationState) => {
  return {

  };
};

export default connect(mapStateToProps)(Home);
