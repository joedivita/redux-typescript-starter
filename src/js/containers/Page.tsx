import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as ItemActions from '../modules/Items/actions/itemActions';
import * as NotificationActions from '../modules/Notifications/actions/notificationActions';
import { Map, List } from 'immutable';
import { MainLayout } from '../components/MainLayout';
import { IApplicationState } from '../modules/reducers';
import { IXhrError } from '../modules/XhrError/xhrErrorDefinitions';
import { NotificationType } from '../modules/Notifications/definitions/notificationsDefinitions';

interface IProps {
  items: Immutable.List<string>;
  loading: boolean;
  dispatch: Dispatch;
  error: IXhrError;
}

export class Page extends React.Component<IProps, any> {
  private itemActions = bindActionCreators(ItemActions, this.props.dispatch);
  private notificationActions = bindActionCreators(NotificationActions, this.props.dispatch);

  handleClick(): void {
    this.itemActions.addItem();
  }

  componentDidMount(): void {
    this.itemActions.getItems();
  }

  componentWillReceiveProps(nextProps: IProps): void {
    if (nextProps.error && nextProps.error.code >= 400) {
      this.notificationActions.emitNotification({
        message: 'My error message',
        type: NotificationType.ERROR,
      });
    }
  }

  render(): JSX.Element {
    return (
      <MainLayout
        loading={this.props.loading}
        items={this.props.items}
        clickHeader={() => this.handleClick()}
      />
    );
  }
}

const mapStateToProps = (state: IApplicationState) => {
  return {
    error:    state.itemsState.error,
    items:    state.itemsState.items,
    loading:  state.itemsState.loading,
  };
};

export default connect(mapStateToProps)(Page);
