import { createAction, Action } from 'redux-actions';
import * as Constants from '../constants';
import {
  NotificationType,
  INotificationPayload,
} from '../definitions/notificationsDefinitions';

const emitNotification: (NotificationPayload) => {} =
createAction<INotificationPayload>(
  Constants.EMIT_NOTIFICATION,
  (NotificationPayload) => (NotificationPayload)
);

export { emitNotification };
