import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as ItemActions from '../modules/Items/actions/itemActions';
import * as Immutable from 'immutable';

interface Props {
  items: Immutable.List<string>
  clickHeader: () => void
}

class MainLayout extends React.Component<Props, any> {
  render() {
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
    )
  }
}

export { MainLayout };
