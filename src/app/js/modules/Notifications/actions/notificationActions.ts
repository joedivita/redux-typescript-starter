import { createAction, Action } from 'redux-actions';
import * as Constants from '../constants';
import {
  NotificationType,
  NotificationPayload
} from '../definitions/notificationsDefinitions';

const emitNotification: (NotificationPayload) => {} =
createAction<NotificationPayload>(
  Constants.EMIT_NOTIFICATION,
  (NotificationPayload) => (NotificationPayload)
)

export { emitNotification };
