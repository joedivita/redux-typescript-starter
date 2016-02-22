import { List } from 'immutable';
import { IXhrError } from '../../XhrError/xhrErrorDefinitions';

export interface IItemsPayload {
  promise?: axios.Promise;
  data?: Array<string>;
  status?: number;
  statusText?: string;
}

export interface IItemPayload {
  promise?: axios.Promise;
  data?: string;
  status?: number;
  statusText?: string;
}

export interface IItemsState {
  error: IXhrError;
  items: List<string>;
  loading: boolean;
}
