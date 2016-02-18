import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as ItemActions from '../../modules/Items/actions/itemActions';
import * as Immutable from 'immutable';

interface Props {
  items: Immutable.List<string>
  dispatch: Dispatch
}

interface State {}

export class MainLayout extends React.Component<Props, State> {
  private actions = bindActionCreators(ItemActions, this.props.dispatch)

  handleClick() {
    this.actions.addItem();
  }

  render() {
    return (
      <div>
        <h1 onClick={() => this.handleClick()}>
          Items:
        </h1>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToItems = (state: Immutable.Map<string, any>) => {
  const itemsState: Immutable.Map<string, any> = state.get('items');
  return {
    items: itemsState.get('items')
  };
};

export default connect(mapStateToItems)(MainLayout);
