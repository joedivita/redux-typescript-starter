import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IApplicationState } from '../modules/reducers';
import { IGlobalState } from '../modules/Global/definitions/globalDefinitions';
import * as NProgress from 'nprogress';

interface IProps {
  globalLoaderRequestCount?: number;
}

export class GlobalLoader extends React.Component<IProps, any> {
  nProgressInstance = NProgress;

  componentWillReceiveProps(newProps: IProps): void {
    if (newProps.globalLoaderRequestCount === 0) {
      this.nProgressInstance.done();
    }
    else if (newProps.globalLoaderRequestCount > 0) {
      this.nProgressInstance.start();
      this.nProgressInstance.set(0.4);
    }
  }

  render(): JSX.Element {
    return (
      <div className='global-loader'></div>
    );
  }
}

const mapStateToProps = (state: IApplicationState): IGlobalState => {
  return state.globalState;
};

export default connect(mapStateToProps)(GlobalLoader);
