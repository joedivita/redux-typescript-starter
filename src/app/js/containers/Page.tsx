import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as ItemActions from '../modules/Items/actions/itemActions';
import * as NotificationActions from '../modules/Notifications/actions/notificationActions';
import { Map, List } from 'immutable';
import { MainLayout } from '../components/MainLayout';
import { ApplicationState } from '../modules/reducers';
import { XhrError } from '../modules/XhrError/xhrErrorDefinitions';
import { NotificationType } from '../modules/Notifications/definitions/notificationsDefinitions';

interface Props {
  items: Immutable.List<string>
  loading: boolean
  dispatch: Dispatch
  error: XhrError
}

class Page extends React.Component<Props, any> {
  private itemActions = bindActionCreators(ItemActions, this.props.dispatch)
  private notificationActions = bindActionCreators(NotificationActions, this.props.dispatch)

  handleClick(): void {
    this.itemActions.addItem();
  }

  componentDidMount(): void {
    this.itemActions.getItems();
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.error && nextProps.error.code >= 400) {
      this.notificationActions.emitNotification({
        type: NotificationType.ERROR,
        message: 'My error message'
      })
    }
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
    loading:  state.itemsState.loading,
    error:    state.itemsState.error
  };
};

export default connect(mapStateToProps)(Page);
