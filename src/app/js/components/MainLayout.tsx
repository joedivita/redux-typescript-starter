import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as ItemActions from '../modules/Items/actions/itemActions';
import { List } from 'immutable';

interface Props {
  items: List<string>
  clickHeader: () => void
  loading: boolean
}

class MainLayout extends React.Component<Props, any> {
  renderListView() {
    return (
      <div>
        <h1 onClick={this.props.clickHeader}>
          Items:
        </h1>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  renderLoadingView() {
    return (
      <h1>Loading...</h1>
    );
  }

  renderView() {
    if (this.props.loading) {
      return this.renderLoadingView();
    }
    else {
      return this.renderListView();
    }
  }

  render() {
    return this.renderView();
  }
}

export { MainLayout };
