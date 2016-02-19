import { combineReducers } from 'redux';
import itemsReducer from './Items/reducers/index';
import notificationsReducer from './Notifications/reducers/index';
import { ItemsState } from './Items/definitions/itemsDefinitions';
import { NotificationState } from './Notifications/definitions/notificationsDefinitions';

export interface ApplicationState {
  itemsState: ItemsState,
  notificationState: NotificationState
}

const rootReducer = combineReducers({
  itemsState: itemsReducer,
  notificationsState: notificationsReducer
});

export { rootReducer }
