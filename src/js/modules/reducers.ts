import { combineReducers } from 'redux';
import itemsReducer from './Items/reducers/index';
import notificationsReducer from './Notifications/reducers/index';
import { IItemsState } from './Items/definitions/itemsDefinitions';
import { INotificationState } from './Notifications/definitions/notificationsDefinitions';

export interface IApplicationState {
  itemsState: IItemsState;
  notificationState: INotificationState;
}

const rootReducer = combineReducers({
  itemsState: itemsReducer,
  notificationsState: notificationsReducer,
});

export { rootReducer }
