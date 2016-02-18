import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as ItemActions from '../modules/Items/actions/itemActions';
import * as Immutable from 'immutable';
import { MainLayout } from '../components/MainLayout';

interface Props {
  items: Immutable.List<string>
  dispatch: Dispatch
}

class Page extends React.Component<Props, any> {
  private actions = bindActionCreators(ItemActions, this.props.dispatch)

  handleClick() {
    this.actions.addItem();
  }

  render() {
    return (
      <MainLayout
        items={this.props.items}
        clickHeader={() => this.handleClick()}
      />
    )
  }
}

const mapStateToProps = (state: Immutable.Map<string, any>) => {
  const itemsState: Immutable.Map<string, any> = state.get('items');
  return {
    items: itemsState.get('items')
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemActions, dispatch);
}

export default connect(mapStateToProps)(Page);
