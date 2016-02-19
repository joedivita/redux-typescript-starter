import { createAction, Action } from 'redux-actions';
import * as Constants from '../constants';
import {
  NotificationType,
  NotificationPayload
} from '../definitions/notificationsDefinitions';

const emitNotification = createAction<NotificationPayload>(
  Constants.EMIT_NOTIFICATION,
  (type: NotificationType, message: string) => ({
    type: type,
    message: message
  })
)

export { emitNotification };
