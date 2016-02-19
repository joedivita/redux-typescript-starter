export enum NotificationType {
  SUCCESS,
  INFO,
  WARN,
  ERROR
}

export interface NotificationPayload {
  type: NotificationType,
  message: string
}

export interface NotificationState {
  type: NotificationType
  message: string
}
