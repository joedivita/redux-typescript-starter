import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as FooActions from '../../modules/Foo/actions/fooAction';
import { Map } from 'immutable';

interface Props {
  foo: Map<string, any>
  dispatch: Dispatch
}

interface State {}

export class MainLayout extends React.Component<Props, State> {
  private actions = bindActionCreators(FooActions, this.props.dispatch)

  handleClick() {
    this.actions.fooAction();
  }

  render() {
    return (
      <h1 onClick={() => this.handleClick()}>
        Foo State: {this.props.foo.get('bar')}
      </h1>
    )
  }
}

const mapStateToFoo = (state: Map<string, any>) => ({
  foo: state.get('foo')
});

export default connect(mapStateToFoo)(MainLayout);
