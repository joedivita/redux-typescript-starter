import { List } from 'immutable';
import { XhrError } from '../../XhrError/xhrErrorDefinitions';

export interface ItemsPayload {
  promise?: axios.Promise
  data?: Array<string>,
  status?: number,
  statusText?: string
}

export interface ItemsState {
  items: List<string>
  loading: boolean
  error: XhrError
}
