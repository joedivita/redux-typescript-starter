import * as React from 'react';
import { List } from 'immutable';

interface IProps {
  items: List<string>;
  loading: boolean;
  clickHeader: () => void;
}

class MainLayout extends React.Component<IProps, any> {
  renderListView(): JSX.Element {
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

  renderLoadingView(): JSX.Element {
    return (
      <h1>Loading...</h1>
    );
  }

  renderView(): JSX.Element {
    if (this.props.loading) {
      return this.renderLoadingView();
    }
    else {
      return this.renderListView();
    }
  }

  render(): JSX.Element {
    return this.renderView();
  }
}

export { MainLayout };
