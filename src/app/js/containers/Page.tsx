import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as ItemActions from '../modules/Items/actions/itemActions';
import { Map, List } from 'immutable';
import { MainLayout } from '../components/MainLayout';
import { ApplicationState } from '../modules/reducers';

interface Props {
  items: Immutable.List<string>
  loading: boolean
  dispatch: Dispatch
}

class Page extends React.Component<Props, any> {
  private actions = bindActionCreators(ItemActions, this.props.dispatch)

  handleClick(): void {
    this.actions.addItem();
  }

  componentDidMount(): void {
    this.actions.getItems();
  }

  componentWillReceiveProps(): void {
    //console.log(this.get())
  }

  render(): JSX.Element {
    return (
      <MainLayout
        loading={this.props.loading}
        items={this.props.items}
        clickHeader={() => this.handleClick()}
      />
    )
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    items:    state.itemsState.items,
    loading:  state.itemsState.loading
  };
};

export default connect(mapStateToProps)(Page);
