export enum NotificationType {
  SUCCESS,
  INFO,
  WARN,
  ERROR
}

export interface INotificationPayload {
  message: string;
  type: NotificationType;
}

export interface INotificationState {
  message: string;
  type: NotificationType;
}
